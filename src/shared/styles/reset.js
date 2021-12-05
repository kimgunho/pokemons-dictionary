import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    html {
        height:100%;
    }
    body{
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400&display=swap');
        padding:0;
        margin:0;
        font-family: 'Noto Sans', sans-serif;
       
    }
    h1,h2,h3,h4,h5,h6{margin:0;}
    a{text-decoration:none;color:#000;}
    p{margin:0;}
    ul{list-style:none;padding:0;margin:0;}
}
`

export default GlobalStyle
