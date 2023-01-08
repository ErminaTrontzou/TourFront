"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 385:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next-i18next"
const external_next_i18next_namespaceObject = require("next-i18next");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "react-cookie"
const external_react_cookie_namespaceObject = require("react-cookie");
;// CONCATENATED MODULE: external "@mui/material/AppBar"
const AppBar_namespaceObject = require("@mui/material/AppBar");
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
;// CONCATENATED MODULE: external "@mui/material/Toolbar"
const Toolbar_namespaceObject = require("@mui/material/Toolbar");
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/IconButton"
var IconButton_ = __webpack_require__(934);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);
;// CONCATENATED MODULE: external "@mui/material/Typography"
const Typography_namespaceObject = require("@mui/material/Typography");
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Menu"
const Menu_namespaceObject = require("@mui/material/Menu");
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Menu"
const icons_material_Menu_namespaceObject = require("@mui/icons-material/Menu");
;// CONCATENATED MODULE: external "@mui/material/Container"
const Container_namespaceObject = require("@mui/material/Container");
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Avatar"
const Avatar_namespaceObject = require("@mui/material/Avatar");
var Avatar_default = /*#__PURE__*/__webpack_require__.n(Avatar_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Tooltip"
const Tooltip_namespaceObject = require("@mui/material/Tooltip");
var Tooltip_default = /*#__PURE__*/__webpack_require__.n(Tooltip_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/MenuItem"
const MenuItem_namespaceObject = require("@mui/material/MenuItem");
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Adb"
const Adb_namespaceObject = require("@mui/icons-material/Adb");
var Adb_default = /*#__PURE__*/__webpack_require__.n(Adb_namespaceObject);
;// CONCATENATED MODULE: ./components/navigationBar.js















function NavigationBar() {
    const { 0: anchorElNav , 1: setAnchorElNav  } = (0,external_react_.useState)(null);
    const { 0: anchorElUser , 1: setAnchorElUser  } = (0,external_react_.useState)(null);
    const handleOpenNavMenu = (event)=>{
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event)=>{
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseNavMenu = ()=>{
        setAnchorElNav(null);
    };
    const handleCloseUserMenu = ()=>{
        setAnchorElUser(null);
    };
    const settings = [
        "Log In",
        "Sign Up"
    ];
    return /*#__PURE__*/ jsx_runtime_.jsx((AppBar_default()), {
        position: "static",
        style: {
            backgroundColor: "transparent",
            border: "none",
            boxShadow: "none"
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx((Container_default()), {
            maxWidth: "string",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Toolbar_default()), {
                disableGutters: true,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Adb_default()), {
                        sx: {
                            display: {
                                xs: "none",
                                md: "flex"
                            },
                            mr: 1,
                            color: "white",
                            zIndex: 2
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "h6",
                        noWrap: true,
                        component: "a",
                        href: "/",
                        sx: {
                            mr: 2,
                            display: {
                                xs: "none",
                                md: "flex"
                            },
                            fontWeight: 700,
                            letterSpacing: ".1rem",
                            fontFamily: "Ubuntu",
                            textDecoration: "none",
                            color: "white",
                            zIndex: 2
                        },
                        children: "TourGuide"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                        sx: {
                            flexGrow: 1,
                            display: {
                                xs: "none",
                                md: "flex"
                            },
                            color: "white",
                            zIndex: 2
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                        sx: {
                            flexGrow: 0,
                            color: "white",
                            zIndex: 2
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                title: "Open settings",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                    onClick: handleOpenUserMenu,
                                    sx: {
                                        p: 0
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                                        alt: "Remy Sharp",
                                        src: "/static/images/avatar/2.jpg"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Menu_default()), {
                                sx: {
                                    mt: "45px"
                                },
                                id: "menu-appbar",
                                anchorEl: anchorElUser,
                                anchorOrigin: {
                                    vertical: "top",
                                    horizontal: "right"
                                },
                                keepMounted: true,
                                transformOrigin: {
                                    vertical: "top",
                                    horizontal: "right"
                                },
                                open: Boolean(anchorElUser),
                                onClose: handleCloseUserMenu,
                                children: settings.map((setting)=>/*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                        onClick: handleCloseUserMenu,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            textAlign: "center",
                                            children: setting
                                        })
                                    }, setting)
                                )
                            })
                        ]
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const navigationBar = (NavigationBar);

;// CONCATENATED MODULE: ./pages/_app.js









function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_cookie_namespaceObject.CookiesProvider, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(navigationBar, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            ]
        })
    });
}
/* harmony default export */ const _app = ((0,external_next_i18next_namespaceObject.appWithTranslation)(MyApp));


/***/ }),

/***/ 19:
/***/ ((module) => {

module.exports = require("@mui/material/Box");

/***/ }),

/***/ 934:
/***/ ((module) => {

module.exports = require("@mui/material/IconButton");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(385));
module.exports = __webpack_exports__;

})();