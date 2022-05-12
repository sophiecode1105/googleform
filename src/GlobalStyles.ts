import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
const GlobalStyles = createGlobalStyle`
    ${reset}
    *{
      
        box-sizing: border-box;
        
    }
    html {
        background-color: #F8EEE3;
    
    }   

    body { 
        width: 100%;
      
    }; 

`;

export default GlobalStyles;
