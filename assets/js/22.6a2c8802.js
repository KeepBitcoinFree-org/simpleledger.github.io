(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{208:function(t,s,a){"use strict";a.r(s);var e=a(2),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"slp-parser"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#slp-parser"}},[t._v("#")]),t._v(" SLP Parser")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("View Repo:")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/simpleledger/slp-parser.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/simpleledger/slp-parser.js"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("slp-parser is a JavaScript Library for parsing "),a("a",{attrs:{href:"https://github.com/simpleledger/slp-specifications",target:"_blank",rel:"noopener noreferrer"}},[t._v("Simple Ledger Protocol (SLP)"),a("OutboundLink")],1),t._v(" metadata. TokenType1 and NFT1 tokens are supported. This repo is designed to be easy to port to other languages.")]),t._v(" "),a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),a("h4",{attrs:{id:"for-node-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#for-node-js"}},[t._v("#")]),t._v(" For node.js")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ npm install slp-parser\n")])])]),a("h4",{attrs:{id:"for-browser"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#for-browser"}},[t._v("#")]),t._v(" For browser")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("https://unpkg.com/slp-parser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("p",[t._v("This library does not perform any validation of the inputs, dealing solely with parsing the OP_RETURN messages SLP uses to function. If this is not clear, please read the "),a("a",{attrs:{href:"https://github.com/simpleledger/slp-specifications",target:"_blank",rel:"noopener noreferrer"}},[t._v("slp-specifications"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("NOTES:")]),t._v(" "),a("ul",[a("li",[t._v("The "),a("a",{attrs:{href:"https://github.com/MikeMcl/bignumber.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("BigNumber.js library"),a("OutboundLink")],1),t._v(" is used to avoid precision issues with numbers having more than 15 significant digits. This can be accessed with "),a("code",[t._v("slpParser.BN")]),t._v(".")])]),t._v(" "),a("h3",{attrs:{id:"how-to-parse"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-parse"}},[t._v("#")]),t._v(" How to parse")]),t._v(" "),a("p",[t._v("This library has a single method called "),a("code",[t._v("parseSLP")]),t._v(" which takes either a Buffer or a hex-string and returns an object such as described with the type definitions inside "),a("code",[t._v("./lib/index.ts")]),t._v(".")]),t._v(" "),a("p",[t._v("There are additional examples in "),a("code",[t._v("examples")]),t._v(" folder.")]),t._v(" "),a("h4",{attrs:{id:"node-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-js"}},[t._v("#")]),t._v(" Node.js")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" slpParser "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'slp-parser'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" slpParser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseSLP")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Buffer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'6a04534c500001010747454e455349534c004c004c004c0001004c00080000000000000064'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hex'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h4",{attrs:{id:"web"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#web"}},[t._v("#")]),t._v(" Web")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" slpParser "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'slp-parser'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" slpParser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseSLP")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'6a04534c500001010747454e455349534c004c004c004c0001004c00080000000000000064'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h2",{attrs:{id:"building-testing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#building-testing"}},[t._v("#")]),t._v(" Building & Testing")]),t._v(" "),a("p",[t._v("Building this project creates browserified versions in the "),a("code",[t._v("dist")]),t._v(" folder.")]),t._v(" "),a("h3",{attrs:{id:"requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[t._v("#")]),t._v(" Requirements")]),t._v(" "),a("p",[t._v("Running the unit tests require node.js v8.15+.")]),t._v(" "),a("h3",{attrs:{id:"build"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build"}},[t._v("#")]),t._v(" Build")]),t._v(" "),a("p",[a("code",[t._v("npm run build")])]),t._v(" "),a("h3",{attrs:{id:"test"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#test"}},[t._v("#")]),t._v(" Test")]),t._v(" "),a("p",[a("code",[t._v("npm run test")])]),t._v(" "),a("h2",{attrs:{id:"porting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#porting"}},[t._v("#")]),t._v(" Porting")]),t._v(" "),a("p",[t._v("slp-parser was designed to be very easy to port to other languages. If you are working on a port to another language please open an issue on this repo so we can link to your port or help with any questions. Make sure to utilize the unit-tests 😃")])])}),[],!1,null,null,null);s.default=r.exports}}]);