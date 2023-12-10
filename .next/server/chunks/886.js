exports.id = 886;
exports.ids = [886];
exports.modules = {

/***/ 9864:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 125, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6249, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 7844, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1522, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3100, 23))

/***/ }),

/***/ 8107:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_baseURL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(693);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7270);
/** @format */ /* __next_internal_client_entry_do_not_use__ default auto */ 

const CekAuth = async ()=>{
    const token = js_cookie__WEBPACK_IMPORTED_MODULE_1__/* ["default"].get */ .Z.get("token");
    if (token) {
        try {
            const response = await (0,_services_baseURL__WEBPACK_IMPORTED_MODULE_0__/* .auth */ .I8)({
                method: "post",
                url: `/cek-token`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return true;
        } catch (error) {
            js_cookie__WEBPACK_IMPORTED_MODULE_1__/* ["default"].remove */ .Z.remove("token");
            return false;
        }
    } else {
        console.log("Token tidak ada");
        return false;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CekAuth);


/***/ })

};
;