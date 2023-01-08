"use strict";
(() => {
var exports = {};
exports.id = 369;
exports.ids = [369];
exports.modules = {

/***/ 622:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(853);
// EXTERNAL MODULE: ./components/searchBarIndex.js
var searchBarIndex = __webpack_require__(747);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "@mui/material/TextField"
var TextField_ = __webpack_require__(42);
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField_);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(692);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
;// CONCATENATED MODULE: ./components/searchBarSingleImage.js








const cities = [
    "Paris",
    "London",
    "New York",
    "Tokyo",
    "Berlin",
    "Buenos Aires",
    "Cairo",
    "Canberra",
    "Rio de Janeiro",
    "Dublin"
];
const SearchBar = ({ searchQuery , setSearchQuery , onFormSubmit , onKeyDown  })=>/*#__PURE__*/ jsx_runtime_.jsx("form", {
        onSubmit: onFormSubmit,
        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Autocomplete, {
            onInputChange: (e)=>setSearchQuery(e)
            ,
            disableClearable: true,
            value: searchQuery,
            options: cities,
            renderInput: (params)=>/*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                    ...params,
                    id: "search-bar",
                    className: "text",
                    onInput: setSearchQuery,
                    onKeyDown: onKeyDown,
                    value: searchQuery,
                    label: "Enter A City Name",
                    variant: "filled",
                    placeholder: "Search...",
                    size: "small",
                    style: {
                        width: 600,
                        backgroundColor: "white",
                        borderRadius: "5px",
                        fontFamily: "ubuntu"
                    }
                })
        })
    })
;
function SearchBarSingleImage(props) {
    const { 0: searchQuery , 1: setSearchQuery  } = (0,external_react_.useState)("");
    const router = (0,router_.useRouter)();
    const handleChangeWord = (e)=>{
        setSearchQuery(e.target.value);
    };
    const handleSubmitForm = (e)=>{
        e.preventDefault();
        router.push("/?q=" + searchQuery).then();
    };
    const handleKeyDownSearchBar = (e)=>{
        if (e.keyCode === 31) {
            e.preventDefault();
            router.push("/?q=" + searchQuery).then();
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "search-container searchbar",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                style: {
                    alignItems: "center",
                    display: "flex",
                    alignSelf: "center",
                    justifyContent: "center",
                    padding: "20px"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(SearchBar, {
                        searchQuery: searchQuery,
                        setSearchQuery: handleChangeWord,
                        onFormSubmit: handleSubmitForm,
                        onKeyDown: handleKeyDownSearchBar
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                        type: "submit",
                        variant: "contained",
                        onClick: handleSubmitForm,
                        style: {
                            borderRadius: "8px",
                            height: "49px",
                            backgroundColor: "#0E1822",
                            fontFamily: "ubuntu"
                        },
                        children: "Search City"
                    })
                ]
            })
        })
    });
};

// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
;// CONCATENATED MODULE: ./pages/image/[id]/index.js





function Specific({ singleCity  }) {
    console.log(singleCity);
    const AllImagesMap = dynamic_default()(null, {
        loadableGenerated: {
            modules: [
                "image/[id]/index.js -> " + "../../../components/specificImagesMap"
            ]
        },
        ssr: false
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(SearchBarSingleImage, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "map-container",
                children: /*#__PURE__*/ jsx_runtime_.jsx(AllImagesMap, {
                    mapInfo: singleCity
                })
            })
        ]
    });
}
/* harmony default export */ const _id_ = (Specific);
async function getServerSideProps({ query  }) {
    const cityID = query.id;
    const data = await fetch("http://localhost:8080/api/v1/images/" + cityID);
    let singleImage = await data.json();
    return {
        props: {
            singleCity: singleImage
        }
    };
}


/***/ }),

/***/ 692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 19:
/***/ ((module) => {

module.exports = require("@mui/material/Box");

/***/ }),

/***/ 819:
/***/ ((module) => {

module.exports = require("@mui/material/Button");

/***/ }),

/***/ 42:
/***/ ((module) => {

module.exports = require("@mui/material/TextField");

/***/ }),

/***/ 832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [152,747], () => (__webpack_exec__(622)));
module.exports = __webpack_exports__;

})();