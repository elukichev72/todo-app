import { createGlobalStyle } from 'styled-components';
import HeroFont from '../../fonts/Hero-Regular.ttf'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    @font-face {
        font-family: 'Hero';
        src: url(${HeroFont});
    }
`;
