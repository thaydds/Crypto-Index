import { renderHook, act } from '@testing-library/react-hooks';
import MockAdapter from 'axios-mock-adapter';

import { api } from '../../services/api';
import { useAuth, AuthProvider } from '../../context/AuthContext';

const apiMock = new MockAdapter(api);

describe('Auth Context', () => {
  it('should be hable to login', async () => {
    const apiResponse = {
      user: {
        id: 'user-123',
        name: 'Teste',
        email: 'teste@example.com',
      },
      token: 'JWT-TOKEN',
    };

    apiMock.onPost('sessions').reply(200, apiResponse);

    const setItemSpy = jest.spyOn(Storage.prototype, 'setItem');

    const { result, waitForNextUpdate } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    result.current.login({
      email: 'teste@example.com',
      password: '123456',
    });

    await waitForNextUpdate();

    expect(setItemSpy).toHaveBeenCalledWith('@trybe:token', apiResponse.token);
    expect(setItemSpy).toHaveBeenCalledWith(
      '@trybe:user',
      JSON.stringify(apiResponse.user),
    );
    expect(result.current.user.email).toEqual('teste@example.com');
  });
  it('should be hable to logout', async () => {
    jest.spyOn(Storage.prototype, 'getItem').mockImplementation((key) => {
      switch (key) {
        case '@trybe:token':
          return 'token-123';
        case '@trybe:user':
          return JSON.stringify({
            id: 'user-123',
            name: 'teste',
            email: 'teste@example.com',
          });
        default:
          return null;
      }
    });

    const removeItemSpy = jest.spyOn(Storage.prototype, 'removeItem');

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    act(() => {
      result.current.logout();
    });

    expect(removeItemSpy).toHaveBeenCalledTimes(2);
    expect(result.current.user).toBeUndefined();
  });
});
