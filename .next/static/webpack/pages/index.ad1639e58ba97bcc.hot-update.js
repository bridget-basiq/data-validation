"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DataValidation; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nfunction DataValidation() {\n    var _this1 = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), accounts1 = ref[0], setAccounts = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), groupedInstitutions = ref1[0], setGroupedInstitutions = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), institutions = ref2[0], setInstitutions = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"/api/institutions\").then(function(res) {\n            setInstitutions(res.data);\n        });\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"/api/users\").then(function(res1) {\n            res1.data.forEach(function(user) {\n                var userId = user.id;\n                axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"/api/accounts\", {\n                    params: {\n                        userId: userId\n                    }\n                }).then(function(res) {\n                    var nonTests = res.data.filter(function(account) {\n                        return account.institution !== \"AU00000\" && account.institution !== \"AU00001\";\n                    });\n                    setAccounts(function(accounts) {\n                        return accounts.concat(nonTests);\n                    });\n                }).catch(function(error) {\n                    console.log(error);\n                });\n            });\n        }).catch(function(error) {\n            console.log(error);\n        });\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var groupedInstitutionsById = groupBy(accounts1, function(item) {\n            return [\n                item.institution\n            ];\n        });\n        setGroupedInstitutions(groupedInstitutionsById);\n    }, [\n        accounts1\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: \"text-black bg-white\",\n            children: groupedInstitutions.map(function(accounts, i) {\n                var institutionId = accounts[0].institution;\n                var properties = [\n                    \"accountHolder\",\n                    \"accountNo\",\n                    \"name\",\n                    \"currency\",\n                    \"class\",\n                    \"balance\",\n                    \"availableFunds\",\n                    \"lastUpdated\",\n                    \"transactionIntervals\",\n                    \"institution\"\n                ];\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    class: \"table\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: institutions.filter(function(institution) {\n                                return institution.id === institutionId;\n                            })[0].name\n                        }, void 0, false, {\n                            fileName: \"/Users/bridget/Projects/data-validation/pages/index.js\",\n                            lineNumber: 58,\n                            columnNumber: 15\n                        }, _this1),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableContainer, {\n                            sx: {\n                                width: 80\n                            },\n                            component: _mui_material__WEBPACK_IMPORTED_MODULE_3__.Paper,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Table, {\n                                sx: {\n                                    minWidth: 650\n                                },\n                                \"aria-label\": \"simple table\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableHead, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableRow, {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, {\n                                                    children: \"Property\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/bridget/Projects/data-validation/pages/index.js\",\n                                                    lineNumber: 68,\n                                                    columnNumber: 23\n                                                }, _this1),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, {\n                                                    align: \"right\",\n                                                    children: \"Returned\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/bridget/Projects/data-validation/pages/index.js\",\n                                                    lineNumber: 69,\n                                                    columnNumber: 23\n                                                }, _this1),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, {\n                                                    align: \"right\",\n                                                    children: \"Out of\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/bridget/Projects/data-validation/pages/index.js\",\n                                                    lineNumber: 70,\n                                                    columnNumber: 23\n                                                }, _this1),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, {\n                                                    align: \"right\",\n                                                    children: \"Reliability\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/bridget/Projects/data-validation/pages/index.js\",\n                                                    lineNumber: 71,\n                                                    columnNumber: 23\n                                                }, _this1)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/bridget/Projects/data-validation/pages/index.js\",\n                                            lineNumber: 67,\n                                            columnNumber: 21\n                                        }, _this1)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/bridget/Projects/data-validation/pages/index.js\",\n                                        lineNumber: 66,\n                                        columnNumber: 19\n                                    }, _this1),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableBody, {\n                                        children: properties.map(function(key) {\n                                            return percentageReturned(accounts, key);\n                                        })\n                                    }, void 0, false, {\n                                        fileName: \"/Users/bridget/Projects/data-validation/pages/index.js\",\n                                        lineNumber: 74,\n                                        columnNumber: 19\n                                    }, _this1)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/bridget/Projects/data-validation/pages/index.js\",\n                                lineNumber: 65,\n                                columnNumber: 17\n                            }, _this1)\n                        }, void 0, false, {\n                            fileName: \"/Users/bridget/Projects/data-validation/pages/index.js\",\n                            lineNumber: 59,\n                            columnNumber: 15\n                        }, _this1)\n                    ]\n                }, i, true, {\n                    fileName: \"/Users/bridget/Projects/data-validation/pages/index.js\",\n                    lineNumber: 57,\n                    columnNumber: 13\n                }, _this1);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/bridget/Projects/data-validation/pages/index.js\",\n            lineNumber: 50,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n};\n_s(DataValidation, \"zuxc+aRVPYqhvwUzKbXJYngAlfk=\");\n_c = DataValidation;\nfunction groupBy(array, f) {\n    var groups = {};\n    array.forEach(function(o) {\n        var group = JSON.stringify(f(o));\n        groups[group] = groups[group] || [];\n        groups[group].push(o);\n    });\n    return Object.keys(groups).map(function(group) {\n        return groups[group];\n    });\n}\nvar percentageReturned = function(accounts, key) {\n    var blank = \"\";\n    var totalLength = accounts.length;\n    var count = accounts.filter(function(account) {\n        return account[key] === blank || account[key] === null;\n    }).length;\n    var totalPopulated = totalLength - count;\n    var percentageReturned1 = totalPopulated / totalLength * 100;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableRow, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, {\n                align: \"right\",\n                children: key\n            }, void 0, false, {\n                fileName: \"/Users/bridget/Projects/data-validation/pages/index.js\",\n                lineNumber: 115,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, {\n                align: \"right\",\n                children: totalPopulated\n            }, void 0, false, {\n                fileName: \"/Users/bridget/Projects/data-validation/pages/index.js\",\n                lineNumber: 116,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, {\n                align: \"right\",\n                children: totalLength\n            }, void 0, false, {\n                fileName: \"/Users/bridget/Projects/data-validation/pages/index.js\",\n                lineNumber: 117,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, {\n                align: \"right\",\n                children: Math.round(percentageReturned1)\n            }, void 0, false, {\n                fileName: \"/Users/bridget/Projects/data-validation/pages/index.js\",\n                lineNumber: 118,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, key, true, {\n        fileName: \"/Users/bridget/Projects/data-validation/pages/index.js\",\n        lineNumber: 114,\n        columnNumber: 7\n    }, _this);\n};\nvar _c;\n$RefreshReg$(_c, \"DataValidation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUE0QztBQUNsQjtBQUM2RTs7QUFFeEYsU0FBU1UsY0FBYyxHQUFHOzs7SUFDdkMsSUFBZ0NULEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFMOUMsU0FLaUIsR0FBaUJBLEdBQVksR0FBN0IsRUFMakIsV0FLOEIsR0FBSUEsR0FBWSxHQUFoQjtJQUM1QixJQUFzREEsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQU5wRSxtQkFNNEIsR0FBNEJBLElBQVksR0FBeEMsRUFONUIsc0JBTW9ELEdBQUlBLElBQVksR0FBaEI7SUFDbEQsSUFBd0NBLElBQVUsR0FBVkEsK0NBQVEsRUFBRSxFQVBwRCxZQU9xQixHQUFxQkEsSUFBVSxHQUEvQixFQVByQixlQU9zQyxHQUFJQSxJQUFVLEdBQWQ7SUFFcENELGdEQUFTLENBQUMsV0FBTTtRQUNkRSxnREFDTSxDQUFDLG1CQUFtQixDQUFDLENBQ3hCZ0IsSUFBSSxDQUFDQyxTQUFBQSxHQUFHLEVBQUk7WUFDWEgsZUFBZSxDQUFDRyxHQUFHLENBQUNDLElBQUksQ0FBQztTQUMxQixDQUFDO0tBQ0wsRUFBRSxFQUFFLENBQUM7SUFFTnBCLGdEQUFTLENBQUMsV0FBTTtRQUNkRSxnREFDTSxDQUFDLFlBQVksQ0FBQyxDQUNqQmdCLElBQUksQ0FBQ0MsU0FBQUEsSUFBRyxFQUFJO1lBQ1hBLElBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPLENBQUNDLFNBQUFBLElBQUksRUFBSTtnQkFDdkIsSUFBSUMsTUFBTSxHQUFHRCxJQUFJLENBQUNFLEVBQUU7Z0JBQ3BCdEIsZ0RBQ0ksQ0FBQyxlQUFlLEVBQUU7b0JBQUV1QixNQUFNLEVBQUU7d0JBQUVGLE1BQU0sRUFBTkEsTUFBTTtxQkFBRTtpQkFBRSxDQUFDLENBQzVDTCxJQUFJLENBQUNDLFNBQUFBLEdBQUcsRUFBSTtvQkFDWCxJQUFJTyxRQUFRLEdBQUdQLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDTyxNQUFNLENBQUNDLFNBQUFBLE9BQU87K0JBQUlBLE9BQU8sQ0FBQ0MsV0FBVyxLQUFLLFNBQVMsSUFBSUQsT0FBTyxDQUFDQyxXQUFXLEtBQUssU0FBUztxQkFBQSxDQUFDO29CQUNqSGpCLFdBQVcsQ0FBQ0QsU0FBQUEsUUFBUTsrQkFBSUEsUUFBUSxDQUFDbUIsTUFBTSxDQUFDSixRQUFRLENBQUM7cUJBQUEsQ0FBQyxDQUFDO2lCQUNwRCxDQUFDLENBQ0RLLEtBQUssQ0FBQ0MsU0FBQUEsS0FBSyxFQUFJO29CQUNkQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSyxDQUFDO2lCQUNuQixDQUFDLENBQUM7YUFDSixDQUFDLENBQUM7U0FDSixDQUFDLENBQ0RELEtBQUssQ0FBQ0MsU0FBQUEsS0FBSyxFQUFJO1lBQ2RDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLLENBQUM7U0FDbkIsQ0FBQyxDQUFDO0tBQ04sRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQaEMsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QsSUFBSW1DLHVCQUF1QixHQUFHQyxPQUFPLENBQUN6QixTQUFRLEVBQUUsU0FBUzBCLElBQUksRUFDN0Q7WUFDRSxPQUFPO2dCQUFDQSxJQUFJLENBQUNSLFdBQVc7YUFBQyxDQUFDO1NBQzNCLENBQUM7UUFDRmYsc0JBQXNCLENBQUNxQix1QkFBdUIsQ0FBQztLQUNoRCxFQUFFO1FBQUN4QixTQUFRO0tBQUMsQ0FBQztJQUVkLHFCQUNFO2tCQUNFLDRFQUFDMkIsTUFBSTtZQUFDQyxTQUFTLEVBQUMscUJBQXFCO3NCQUNsQzFCLG1CQUFtQixDQUFDMkIsR0FBRyxDQUFDLFNBQUM3QixRQUFRLEVBQUU4QixDQUFDLEVBQUs7Z0JBQ3hDLElBQUlDLGFBQWEsR0FBRy9CLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ2tCLFdBQVc7Z0JBRTNDLElBQUljLFVBQVUsR0FBRztvQkFBQyxlQUFlO29CQUFFLFdBQVc7b0JBQUUsTUFBTTtvQkFBRSxVQUFVO29CQUFFLE9BQU87b0JBQUUsU0FBUztvQkFBRSxnQkFBZ0I7b0JBQUUsYUFBYTtvQkFBRSxzQkFBc0I7b0JBQUUsYUFBYTtpQkFBQztnQkFFL0oscUJBQ0UsOERBQUNDLEtBQUc7b0JBQUNDLEtBQUssRUFBQyxPQUFPOztzQ0FDaEIsOERBQUNDLElBQUU7c0NBQUUvQixZQUFZLENBQUNZLE1BQU0sQ0FBQ0UsU0FBQUEsV0FBVzt1Q0FBSUEsV0FBVyxDQUFDTCxFQUFFLEtBQUtrQixhQUFhOzZCQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0ssSUFBSTs7Ozs7a0NBQU07c0NBQ3ZGLDhEQUFDekMseURBQWM7NEJBQ2QwQyxFQUFFLEVBQUU7Z0NBQ0hDLEtBQUssRUFBRSxFQUFFOzZCQUNWOzRCQUNBQyxTQUFTLEVBQUV6QyxnREFBSztzQ0FFZiw0RUFBQ04sZ0RBQUs7Z0NBQUM2QyxFQUFFLEVBQUU7b0NBQUVHLFFBQVEsRUFBRSxHQUFHO2lDQUFFO2dDQUFFQyxZQUFVLEVBQUMsY0FBYzs7a0RBQ3JELDhEQUFDN0Msb0RBQVM7a0RBQ1IsNEVBQUNDLG1EQUFROzs4REFDUCw4REFBQ0gsb0RBQVM7OERBQUMsVUFBUTs7Ozs7MERBQVk7OERBQy9CLDhEQUFDQSxvREFBUztvREFBQ2dELEtBQUssRUFBQyxPQUFPOzhEQUFDLFVBQVE7Ozs7OzBEQUFZOzhEQUM3Qyw4REFBQ2hELG9EQUFTO29EQUFDZ0QsS0FBSyxFQUFDLE9BQU87OERBQUMsUUFBTTs7Ozs7MERBQVk7OERBQzNDLDhEQUFDaEQsb0RBQVM7b0RBQUNnRCxLQUFLLEVBQUMsT0FBTzs4REFBQyxhQUFXOzs7OzswREFBWTs7Ozs7O2tEQUN2Qzs7Ozs7OENBQ0Q7a0RBQ1osOERBQUNqRCxvREFBUztrREFDVHVDLFVBQVUsQ0FBQ0gsR0FBRyxDQUFDLFNBQUNjLEdBQUcsRUFBSzs0Q0FDckIsT0FBT0Msa0JBQWtCLENBQUM1QyxRQUFRLEVBQUUyQyxHQUFHLENBQUM7eUNBQ3pDLENBQUM7Ozs7OzhDQUNROzs7Ozs7c0NBQ047Ozs7O2tDQUNPOzttQkF2QktiLENBQUM7Ozs7MEJBd0JuQixDQUNQO2FBQ0YsQ0FBQzs7Ozs7Z0JBQ0c7cUJBQ04sQ0FDSDtDQUNIO0dBbEZ1Qi9CLGNBQWM7QUFBZEEsS0FBQUEsY0FBYztBQW9GdEMsU0FBUzBCLE9BQU8sQ0FBRW9CLEtBQUssRUFBR0MsQ0FBQyxFQUMzQjtJQUNFLElBQUlDLE1BQU0sR0FBRyxFQUFFO0lBQ2ZGLEtBQUssQ0FBQ25DLE9BQU8sQ0FBRSxTQUFVc0MsQ0FBQyxFQUMxQjtRQUNFLElBQUlDLEtBQUssR0FBR0MsSUFBSSxDQUFDQyxTQUFTLENBQUVMLENBQUMsQ0FBQ0UsQ0FBQyxDQUFDLENBQUU7UUFDbENELE1BQU0sQ0FBQ0UsS0FBSyxDQUFDLEdBQUdGLE1BQU0sQ0FBQ0UsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3BDRixNQUFNLENBQUNFLEtBQUssQ0FBQyxDQUFDRyxJQUFJLENBQUVKLENBQUMsQ0FBRSxDQUFDO0tBQ3pCLENBQUMsQ0FBQztJQUNILE9BQU9LLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDUCxNQUFNLENBQUMsQ0FBQ2xCLEdBQUcsQ0FBRSxTQUFVb0IsS0FBSyxFQUMvQztRQUNFLE9BQU9GLE1BQU0sQ0FBQ0UsS0FBSyxDQUFDLENBQUM7S0FDdEIsQ0FBQztDQUNIO0FBR0QsSUFBTUwsa0JBQWtCLEdBQUcsU0FBQzVDLFFBQVEsRUFBRTJDLEdBQUcsRUFBSztJQUM1QyxJQUFNWSxLQUFLLEdBQUcsRUFBRTtJQUNoQixJQUFJQyxXQUFXLEdBQUd4RCxRQUFRLENBQUN5RCxNQUFNO0lBQ2pDLElBQU1DLEtBQUssR0FBRzFELFFBQVEsQ0FBQ2dCLE1BQU0sQ0FBQyxTQUFDQyxPQUFPO2VBQUtBLE9BQU8sQ0FBQzBCLEdBQUcsQ0FBQyxLQUFLWSxLQUFLLElBQUl0QyxPQUFPLENBQUMwQixHQUFHLENBQUMsS0FBSyxJQUFJO0tBQUEsQ0FBQyxDQUFDYyxNQUFNO0lBRWxHLElBQUlFLGNBQWMsR0FBR0gsV0FBVyxHQUFHRSxLQUFLO0lBQ3hDLElBQUlkLG1CQUFrQixHQUFHZSxjQUFjLEdBQUNILFdBQVcsR0FBRyxHQUFHO0lBRXpELHFCQUNJLDhEQUFDM0QsbURBQVE7OzBCQUNQLDhEQUFDSCxvREFBUztnQkFBQ2dELEtBQUssRUFBQyxPQUFPOzBCQUFFQyxHQUFHOzs7OztxQkFBYTswQkFDMUMsOERBQUNqRCxvREFBUztnQkFBQ2dELEtBQUssRUFBQyxPQUFPOzBCQUFFaUIsY0FBYzs7Ozs7cUJBQWE7MEJBQ3JELDhEQUFDakUsb0RBQVM7Z0JBQUNnRCxLQUFLLEVBQUMsT0FBTzswQkFBRWMsV0FBVzs7Ozs7cUJBQWE7MEJBQ2xELDhEQUFDOUQsb0RBQVM7Z0JBQUNnRCxLQUFLLEVBQUMsT0FBTzswQkFBRWtCLElBQUksQ0FBQ0MsS0FBSyxDQUFDakIsbUJBQWtCLENBQUM7Ozs7O3FCQUFhOztPQUp4REQsR0FBRzs7OzthQUtQLENBQ2Q7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgVGFibGUsIFRhYmxlQm9keSwgVGFibGVDZWxsLCBUYWJsZUNvbnRhaW5lciwgVGFibGVIZWFkLCBUYWJsZVJvdywgUGFwZXJ9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXRhVmFsaWRhdGlvbigpIHtcbiAgY29uc3QgW2FjY291bnRzLCBzZXRBY2NvdW50c10gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgW2dyb3VwZWRJbnN0aXR1dGlvbnMsIHNldEdyb3VwZWRJbnN0aXR1dGlvbnNdID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IFtpbnN0aXR1dGlvbnMsIHNldEluc3RpdHV0aW9uc10gPSB1c2VTdGF0ZSgpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBheGlvc1xuICAgICAgLmdldCgnL2FwaS9pbnN0aXR1dGlvbnMnKVxuICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgc2V0SW5zdGl0dXRpb25zKHJlcy5kYXRhKVxuICAgICAgfSlcbiAgfSwgW10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBheGlvc1xuICAgICAgLmdldCgnL2FwaS91c2VycycpXG4gICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICByZXMuZGF0YS5mb3JFYWNoKHVzZXIgPT4ge1xuICAgICAgICAgIGxldCB1c2VySWQgPSB1c2VyLmlkO1xuICAgICAgICAgIGF4aW9zXG4gICAgICAgICAgLmdldCgnL2FwaS9hY2NvdW50cycsIHsgcGFyYW1zOiB7IHVzZXJJZCB9IH0pXG4gICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGxldCBub25UZXN0cyA9IHJlcy5kYXRhLmZpbHRlcihhY2NvdW50ID0+IGFjY291bnQuaW5zdGl0dXRpb24gIT09ICdBVTAwMDAwJyAmJiBhY2NvdW50Lmluc3RpdHV0aW9uICE9PSAnQVUwMDAwMScpXG4gICAgICAgICAgICBzZXRBY2NvdW50cyhhY2NvdW50cyA9PiBhY2NvdW50cy5jb25jYXQobm9uVGVzdHMpKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGdyb3VwZWRJbnN0aXR1dGlvbnNCeUlkID0gZ3JvdXBCeShhY2NvdW50cywgZnVuY3Rpb24oaXRlbSlcbiAgICB7XG4gICAgICByZXR1cm4gW2l0ZW0uaW5zdGl0dXRpb25dO1xuICAgIH0pO1xuICAgIHNldEdyb3VwZWRJbnN0aXR1dGlvbnMoZ3JvdXBlZEluc3RpdHV0aW9uc0J5SWQpXG4gIH0sIFthY2NvdW50c10pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwidGV4dC1ibGFjayBiZy13aGl0ZVwiPlxuICAgICAgICB7Z3JvdXBlZEluc3RpdHV0aW9ucy5tYXAoKGFjY291bnRzLCBpKSA9PiB7XG4gICAgICAgICAgbGV0IGluc3RpdHV0aW9uSWQgPSBhY2NvdW50c1swXS5pbnN0aXR1dGlvbjtcblxuICAgICAgICAgIGxldCBwcm9wZXJ0aWVzID0gWydhY2NvdW50SG9sZGVyJywgJ2FjY291bnRObycsICduYW1lJywgJ2N1cnJlbmN5JywgJ2NsYXNzJywgJ2JhbGFuY2UnLCAnYXZhaWxhYmxlRnVuZHMnLCAnbGFzdFVwZGF0ZWQnLCAndHJhbnNhY3Rpb25JbnRlcnZhbHMnLCAnaW5zdGl0dXRpb24nXTtcblxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVcIiBrZXk9e2l9PlxuICAgICAgICAgICAgICA8aDI+e2luc3RpdHV0aW9ucy5maWx0ZXIoaW5zdGl0dXRpb24gPT4gaW5zdGl0dXRpb24uaWQgPT09IGluc3RpdHV0aW9uSWQpWzBdLm5hbWV9PC9oMj5cbiAgICAgICAgICAgICAgPFRhYmxlQ29udGFpbmVyXG4gICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgIHdpZHRoOiA4MCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgIGNvbXBvbmVudD17UGFwZXJ9XG4gICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFRhYmxlIHN4PXt7IG1pbldpZHRoOiA2NTAgfX0gYXJpYS1sYWJlbD1cInNpbXBsZSB0YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgPFRhYmxlSGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93PlxuICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+UHJvcGVydHk8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj5SZXR1cm5lZDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPk91dCBvZjwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPlJlbGlhYmlsaXR5PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgICAgICAgICA8L1RhYmxlSGVhZD5cbiAgICAgICAgICAgICAgICAgIDxUYWJsZUJvZHk+XG4gICAgICAgICAgICAgICAgICB7cHJvcGVydGllcy5tYXAoKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwZXJjZW50YWdlUmV0dXJuZWQoYWNjb3VudHMsIGtleSlcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICA8L1RhYmxlQm9keT5cbiAgICAgICAgICAgICAgICA8L1RhYmxlPlxuICAgICAgICAgICAgICA8L1RhYmxlQ29udGFpbmVyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICB9KX1cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZnVuY3Rpb24gZ3JvdXBCeSggYXJyYXkgLCBmIClcbntcbiAgdmFyIGdyb3VwcyA9IHt9O1xuICBhcnJheS5mb3JFYWNoKCBmdW5jdGlvbiggbyApXG4gIHtcbiAgICB2YXIgZ3JvdXAgPSBKU09OLnN0cmluZ2lmeSggZihvKSApO1xuICAgIGdyb3Vwc1tncm91cF0gPSBncm91cHNbZ3JvdXBdIHx8IFtdO1xuICAgIGdyb3Vwc1tncm91cF0ucHVzaCggbyApOyAgXG4gIH0pO1xuICByZXR1cm4gT2JqZWN0LmtleXMoZ3JvdXBzKS5tYXAoIGZ1bmN0aW9uKCBncm91cCApXG4gIHtcbiAgICByZXR1cm4gZ3JvdXBzW2dyb3VwXTsgXG4gIH0pXG59XG5cblxuY29uc3QgcGVyY2VudGFnZVJldHVybmVkID0gKGFjY291bnRzLCBrZXkpID0+IHtcbiAgY29uc3QgYmxhbmsgPSBcIlwiO1xuICBsZXQgdG90YWxMZW5ndGggPSBhY2NvdW50cy5sZW5ndGg7XG4gIGNvbnN0IGNvdW50ID0gYWNjb3VudHMuZmlsdGVyKChhY2NvdW50KSA9PiBhY2NvdW50W2tleV0gPT09IGJsYW5rIHx8IGFjY291bnRba2V5XSA9PT0gbnVsbCkubGVuZ3RoO1xuICBcbiAgbGV0IHRvdGFsUG9wdWxhdGVkID0gdG90YWxMZW5ndGggLSBjb3VudDtcbiAgbGV0IHBlcmNlbnRhZ2VSZXR1cm5lZCA9IHRvdGFsUG9wdWxhdGVkL3RvdGFsTGVuZ3RoICogMTAwO1xuXG4gIHJldHVybiAoXG4gICAgICA8VGFibGVSb3cga2V5PXtrZXl9PlxuICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj57a2V5fTwvVGFibGVDZWxsPlxuICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj57dG90YWxQb3B1bGF0ZWR9PC9UYWJsZUNlbGw+XG4gICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPnt0b3RhbExlbmd0aH08L1RhYmxlQ2VsbD5cbiAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+e01hdGgucm91bmQocGVyY2VudGFnZVJldHVybmVkKX08L1RhYmxlQ2VsbD5cbiAgICAgIDwvVGFibGVSb3c+XG4gIClcbn0iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJheGlvcyIsIlRhYmxlIiwiVGFibGVCb2R5IiwiVGFibGVDZWxsIiwiVGFibGVDb250YWluZXIiLCJUYWJsZUhlYWQiLCJUYWJsZVJvdyIsIlBhcGVyIiwiRGF0YVZhbGlkYXRpb24iLCJhY2NvdW50cyIsInNldEFjY291bnRzIiwiZ3JvdXBlZEluc3RpdHV0aW9ucyIsInNldEdyb3VwZWRJbnN0aXR1dGlvbnMiLCJpbnN0aXR1dGlvbnMiLCJzZXRJbnN0aXR1dGlvbnMiLCJnZXQiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImZvckVhY2giLCJ1c2VyIiwidXNlcklkIiwiaWQiLCJwYXJhbXMiLCJub25UZXN0cyIsImZpbHRlciIsImFjY291bnQiLCJpbnN0aXR1dGlvbiIsImNvbmNhdCIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZ3JvdXBlZEluc3RpdHV0aW9uc0J5SWQiLCJncm91cEJ5IiwiaXRlbSIsIm1haW4iLCJjbGFzc05hbWUiLCJtYXAiLCJpIiwiaW5zdGl0dXRpb25JZCIsInByb3BlcnRpZXMiLCJkaXYiLCJjbGFzcyIsImgyIiwibmFtZSIsInN4Iiwid2lkdGgiLCJjb21wb25lbnQiLCJtaW5XaWR0aCIsImFyaWEtbGFiZWwiLCJhbGlnbiIsImtleSIsInBlcmNlbnRhZ2VSZXR1cm5lZCIsImFycmF5IiwiZiIsImdyb3VwcyIsIm8iLCJncm91cCIsIkpTT04iLCJzdHJpbmdpZnkiLCJwdXNoIiwiT2JqZWN0Iiwia2V5cyIsImJsYW5rIiwidG90YWxMZW5ndGgiLCJsZW5ndGgiLCJjb3VudCIsInRvdGFsUG9wdWxhdGVkIiwiTWF0aCIsInJvdW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});