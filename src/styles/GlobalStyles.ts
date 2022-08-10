import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
   *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Roboto', sans-serif;
    }
    
    /* *,
    *::before,
    *::after {
        box-sizing: inherit;
    } */
    
    html, body, #root{
      width: 100%;
      height: 100%;
    }

    button, input{
        border: 0;
        outline: 0;
    }
    button{
        cursor: pointer;
    }


`;