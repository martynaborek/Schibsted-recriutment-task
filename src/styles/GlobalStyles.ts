import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;0,800;1,600&display=swap');
  
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
  }

  body {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    font-family: 'Raleway', sans-serif;
    background-color: #f7f7f7;
  }

  ul,
  ol {
    list-style: none;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
  
  .arrow-icon {
    margin-left: .3rem;
    margin-top: 1px;
    width: .8rem;
    height: .8rem;
  }
  .img-placeholder {
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 1;
    > img{
      height: 3rem;
      width: 4rem;
    }
    
  }
`;

export default GlobalStyles;