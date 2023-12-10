exports.id = 769;
exports.ids = [769];
exports.modules = {

/***/ 6417:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1192))

/***/ }),

/***/ 1192:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ layout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/navbar/AdminNav.tsx
/** @format */ 

const Menus = [
    {
        name: "Dashboard",
        link: "/admin"
    },
    {
        name: "Projects",
        link: "/admin/project"
    }
];
const AdminNav = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("aside", {
        className: "flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto border-r rtl:border-r-0 rtl:border-l bg-black",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: "#"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex flex-col justify-between flex-1 mt-6",
                children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                    className: "-mx-3 space-y-6 ",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "space-y-3 ",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                className: "px-3 text-xs text-gray-500 uppercasetext-gray-400",
                                children: "Menu"
                            }),
                            Menus.map((menu, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: menu.link,
                                        className: "flex items-center px-3 py-2 transition-colors duration-300 transform rounded-lg text-gray-200  hover:bg-gray-800 hover:text-gray-200 ",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "mx-2 text-sm font-medium",
                                            children: menu.name
                                        })
                                    })
                                }, index))
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const navbar_AdminNav = (AdminNav);

// EXTERNAL MODULE: ./src/utils/Auth.ts
var Auth = __webpack_require__(8107);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(9483);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
;// CONCATENATED MODULE: ./src/app/admin/layout.tsx
/** @format */ /* __next_internal_client_entry_do_not_use__ default auto */ 




function Layout({ children  }) {
    const router = (0,navigation.useRouter)();
    const pathname = (0,navigation.usePathname)();
    // loading
    const [isLoading, setIsLoading] = (0,react_.useState)(true);
    const fetchAuth = async ()=>{
        const cekAuth = await (0,Auth/* default */.Z)();
        if (!cekAuth) {
            // redirect to login
            router.push("/login");
        }
        setIsLoading(false);
    };
    (0,react_.useEffect)(()=>{
        if (false) {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        pathname
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: isLoading ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "h-screen w-screen flex justify-center items-center",
            children: "Loading..."
        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex gap-4 overflow-x-hidden w-screen",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(navbar_AdminNav, {})
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "w-full overflow-x-hidden",
                    children: children
                })
            ]
        })
    });
}
/* harmony default export */ const layout = (Layout);


/***/ }),

/***/ 84:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$$typeof": () => (/* binding */ $$typeof),
/* harmony export */   "__esModule": () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1313);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/media/smarthagar/Assets/Project/NextJS/UMUM/my-portfolio/src/app/admin/layout.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ })

};
;