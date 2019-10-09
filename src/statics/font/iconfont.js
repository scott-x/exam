import { injectGlobal } from 'styled-components';

injectGlobal`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1537859609294'); /* IE9*/
  src: url('./iconfont.eot?t=1537859609294#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
  url('./iconfont.ttf?t=1537859609294') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('./iconfont.svg?t=1537859609294#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`
