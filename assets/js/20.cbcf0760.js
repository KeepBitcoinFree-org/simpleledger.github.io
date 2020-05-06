(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{206:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"slp-metadata-maker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#slp-metadata-maker"}},[t._v("#")]),t._v(" SLP Metadata Maker")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("View Repo:")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/simpleledger/slp-metadatamaker.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/simpleledger/slp-metadatamaker.js"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("slp-mdm is a JavaScript Library for building "),a("a",{attrs:{href:"https://github.com/simpleledger/slp-specifications",target:"_blank",rel:"noopener noreferrer"}},[t._v("Simple Ledger Protocol (SLP)"),a("OutboundLink")],1),t._v(" metadata for use in Bitcoin transactions. GENESIS, MINT, and SEND token functions are supported for TokenType1 and NFT1 tokens. This repo is designed to be easy to port to other languages, and should be combined with a transaction building library such as "),a("a",{attrs:{href:"https://github.com/bitpay/bitcore/tree/master/packages/bitcore-lib-cash",target:"_blank",rel:"noopener noreferrer"}},[t._v("bitcore-lib-cash"),a("OutboundLink")],1),t._v(", and a validation library such as "),a("a",{attrs:{href:"https://github.com/simpleledger/slp-validate",target:"_blank",rel:"noopener noreferrer"}},[t._v("slp-validate"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h4",{attrs:{id:"table-of-contents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[t._v("#")]),t._v(" Table of Contents")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#installation"}},[t._v("Installation")])]),a("li",[a("a",{attrs:{href:"#examples"}},[t._v("Examples")]),a("ul",[a("li",[a("a",{attrs:{href:"#genesis"}},[t._v("GENESIS")])]),a("li",[a("a",{attrs:{href:"#mint"}},[t._v("MINT")])]),a("li",[a("a",{attrs:{href:"#send"}},[t._v("SEND")])])])]),a("li",[a("a",{attrs:{href:"#building-testing"}},[t._v("Building & Testing")]),a("ul",[a("li",[a("a",{attrs:{href:"#requirements"}},[t._v("Requirements")])]),a("li",[a("a",{attrs:{href:"#build"}},[t._v("Build")])]),a("li",[a("a",{attrs:{href:"#test"}},[t._v("Test")])])])]),a("li",[a("a",{attrs:{href:"#porting"}},[t._v("Porting")])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),a("h4",{attrs:{id:"for-node-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#for-node-js"}},[t._v("#")]),t._v(" For node.js")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ npm install slp-mdm\n")])])]),a("h4",{attrs:{id:"for-browser"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#for-browser"}},[t._v("#")]),t._v(" For browser")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("https://unpkg.com/slp-mdm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("p",[t._v("Software utilizing this library will want to validate the transactions they create do not burn any tokens. This library does not perform any validation of the inputs or output amounts, dealing solely with creating the OP_RETURN messages SLP needs to function. If this is not clear, please read the "),a("a",{attrs:{href:"https://github.com/simpleledger/slp-specifications",target:"_blank",rel:"noopener noreferrer"}},[t._v("slp-specifications"),a("OutboundLink")],1),t._v(" as it is possible to burn tokens by using this library incorrectly.")]),t._v(" "),a("p",[t._v("NOTES:")]),t._v(" "),a("ul",[a("li",[t._v("The "),a("a",{attrs:{href:"https://github.com/MikeMcl/bignumber.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("BigNumber.js library"),a("OutboundLink")],1),t._v(" is used to avoid precision issues with numbers having more than 15 significant digits. This can be accessed with "),a("code",[t._v("slpMdm.BN")]),t._v(".")]),t._v(" "),a("li",[t._v("All slp-mdm methods require token quantities to be expressed in the smallest possible unit of account for the token (i.e., token satoshis).  This requires the token's precision to be used to calculate the quantity. For example, token having a decimal precision of 9 sending an amount of 1.01 tokens would need to first calculate the sending amount using "),a("code",[t._v("1.01 x 10^9 => 1010000000")]),t._v(".")])]),t._v(" "),a("h3",{attrs:{id:"genesis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#genesis"}},[t._v("#")]),t._v(" GENESIS")]),t._v(" "),a("p",[t._v("Create a new normal token. You can also use "),a("code",[t._v("NFT1.Group.genesis")]),t._v(" for this. "),a("code",[t._v("NFT1.Child.genesis")]),t._v(" has slightly different signature and is described below.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" slpMdm "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'slp-mdm'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" buf "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" slpMdm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TokenType1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("genesis")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'TOK'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                                                              "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// symbol")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'token_name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                                                       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// name")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://fountainhead.cash/document.pdf'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                           "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// document_uri")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'f8bf41177a5f5e808a7ccb648b51080b031f15ca8018d91a576263d6cc626eb6'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// document_hash")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                                                                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// decimals")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                                                               "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// mint_baton_vout")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("slpMdm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1000"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                                               "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// quantity (needs to be BigNumber)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h4",{attrs:{id:"nft1-child-genesis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nft1-child-genesis"}},[t._v("#")]),t._v(" NFT1 Child Genesis")]),t._v(" "),a("p",[t._v("NFT1-child tokens have quantity set to 1, no baton vout (i.e. future minting impossible), and have 0 decimal places. Because of these differences, the signature for this method excludes these parameters.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" slpMdm "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'slp-mdm'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" buf "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" slpMdm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NFT1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Child"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("genesis")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'IVAN'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                                                             "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// symbol")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'gorilla'")]),t._v("                                                           "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// name")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://fountainhead.cash/document.pdf'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                           "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// document_uri")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'f8bf41177a5f5e808a7ccb648b51080b031f15ca8018d91a576263d6cc626eb6'")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// document_hash")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"mint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mint"}},[t._v("#")]),t._v(" MINT")]),t._v(" "),a("p",[t._v("Mints additional tokens. You can also use "),a("code",[t._v("NFT1.Group.mint")]),t._v(", NFT1.Child does not support minting additional tokens.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" slpMdm "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'slp-mdm'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" buf "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" slpMdm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TokenType1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// token_id")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                                                               "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// mint_baton_vout")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("slpMdm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"500"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                                                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// quantity (needs to be BigNumber)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"send"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#send"}},[t._v("#")]),t._v(" SEND")]),t._v(" "),a("p",[t._v("Transfer tokens to new UTXOs. You can also use "),a("code",[t._v("NFT1.Group.send")]),t._v(", or "),a("code",[t._v("NFT1.Child.send")]),t._v(" for this.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" slpMdm "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'slp-mdm'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" buf "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" slpMdm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TokenType1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// token_id")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("                                                                   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// slp_amounts to send")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("slpMdm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"100"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("slpMdm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"200"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("slpMdm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"300"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"building-testing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#building-testing"}},[t._v("#")]),t._v(" Building & Testing")]),t._v(" "),a("p",[t._v("Building this project creates browserified versions in the "),a("code",[t._v("dist")]),t._v(" folder.")]),t._v(" "),a("h3",{attrs:{id:"requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[t._v("#")]),t._v(" Requirements")]),t._v(" "),a("p",[t._v("Running the unit tests require node.js v8.15+.")]),t._v(" "),a("h3",{attrs:{id:"build"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build"}},[t._v("#")]),t._v(" Build")]),t._v(" "),a("p",[a("code",[t._v("npm run build")])]),t._v(" "),a("h3",{attrs:{id:"test"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#test"}},[t._v("#")]),t._v(" Test")]),t._v(" "),a("p",[a("code",[t._v("npm run test")])]),t._v(" "),a("h2",{attrs:{id:"porting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#porting"}},[t._v("#")]),t._v(" Porting")]),t._v(" "),a("p",[t._v("slp-mdm was designed to be very easy to port to other languages. If you are working on a port to another language please open an issue on this repo so we can link to your port or help with any questions. Make sure to utilize the unit-tests 😃")])])}),[],!1,null,null,null);s.default=e.exports}}]);