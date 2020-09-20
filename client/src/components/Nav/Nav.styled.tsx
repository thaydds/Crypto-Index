import styled from 'styled-components';

export const StyledNav = styled.div`
  .nav_container {
    background-color: #2bcc9e;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 100px;

    button {
      outline: none;
    }
    &__logo {
      margin: 0 0 0 0.45em;
      list-style: none;
      text-transform: uppercase;
      a {
        text-decoration: none;
        letter-spacing: 0.45rem;
        color: white;
      }
    }
    &__routes {
      list-style: none;
      text-transform: uppercase;
      display: flex;
      a {
        list-style: none;
        text-transform: uppercase;
        text-decoration: none;
        letter-spacing: 0.25rem;
        display: block;
        padding: 1em;
        color: white;
      }
      button {
        list-style: none;
        background-color: #2bcc9e;
        text-transform: uppercase;
        text-decoration: none;
        letter-spacing: 0.25rem;
        display: block;
        border: none;
        color: white;
        padding: 1em;
      }
      a:hover,
      button:hover {
        background-color: #3fb594;
      }
    }
  }

  /* *********** media queries *********** */
  @media all and (max-width: 1000px) {
    .nav_container {
      flex-direction: column;
      padding: 0;
      &__logo {
        margin: 0;
      }
      &__routes {
        flex-wrap: wrap;
        width: 100%;
        justify-content: space-around;
        li {
          flex: 1 1 50%;
        }
        a,
        button {
          display: flex;
          justify-content: center;
        }
      }
    }
  }

  /* ****** ****** */
  @media all and (max-width: 600px) {
    .nav_container {
      padding: 0;

      &__logo {
        margin: 0.25em 0;
        align-self: left; /* align the logo to the left side of 'flex-container' */
      }
      &__routes {
        flex-direction: column;
        a,
        button {
          text-align: center;
          padding: 10px;
          border-top: 1px solid rgba(255, 255, 255, 0.3);
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }
        li:last-of-type a {
          border-bottom: none;
        }
      }
    }
  }
`;
