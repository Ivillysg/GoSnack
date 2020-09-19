import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,400;0,500;0,700;1,500;1,600&family=Poppins:wght@300;400;500;600;700&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root{
    --color-primary:#1AC0C6;
    --color-primary-dark:#06AFB5;
    --color-danger:#E00605;
    --color-danger-dark:#D30706;

    --orage:#FB7756;
    --red:#E74645;
    --yellow:#FACD60;


    --text-in-background:#7C8B90;
    --text-in-backgrund2:#A0A9AC;
  }
  html,body {
    font-family: 'Archivo', sans-serif; 
    font-size:16px;
    background:#EBF1F4;
  }
`
