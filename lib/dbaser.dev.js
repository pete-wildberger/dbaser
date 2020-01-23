/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/dbaser.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dbaser.ts":
/*!***********************!*\
  !*** ./src/dbaser.ts ***!
  \***********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Model = /** @class */ (function () {\n    function Model(pool, table) {\n        var _this = this;\n        this.request = function (sql_query, params) { return __awaiter(_this, void 0, void 0, function () {\n            var rows, e_1;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        _a.trys.push([0, 2, , 3]);\n                        return [4 /*yield*/, this.pool.query(sql_query, params)];\n                    case 1:\n                        rows = (_a.sent()).rows;\n                        return [2 /*return*/, rows];\n                    case 2:\n                        e_1 = _a.sent();\n                        throw e_1;\n                    case 3: return [2 /*return*/];\n                }\n            });\n        }); };\n        this.find_all = function (orderBy) { return __awaiter(_this, void 0, void 0, function () {\n            var query, rows, e_2;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        query = \"SELECT * FROM \" + this.table;\n                        if (typeof orderBy !== undefined) {\n                            query += \" ORDER BY \" + orderBy;\n                        }\n                        _a.label = 1;\n                    case 1:\n                        _a.trys.push([1, 3, , 4]);\n                        return [4 /*yield*/, this.pool.query(query)];\n                    case 2:\n                        rows = (_a.sent()).rows;\n                        return [2 /*return*/, rows];\n                    case 3:\n                        e_2 = _a.sent();\n                        throw e_2;\n                    case 4: return [2 /*return*/];\n                }\n            });\n        }); };\n        this.find_by_id = function (_id) { return __awaiter(_this, void 0, void 0, function () {\n            var rows, e_3;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        _a.trys.push([0, 2, , 3]);\n                        return [4 /*yield*/, this.pool.query(\"SELECT * FROM \" + this.table + \" WHERE _id=$1\", [_id])];\n                    case 1:\n                        rows = (_a.sent()).rows;\n                        return [2 /*return*/, rows];\n                    case 2:\n                        e_3 = _a.sent();\n                        throw e_3;\n                    case 3: return [2 /*return*/];\n                }\n            });\n        }); };\n        this.bulk_insert = function (entries) { return __awaiter(_this, void 0, void 0, function () {\n            var props, count, _a, inserts, values, db_query, rows, e_4;\n            return __generator(this, function (_b) {\n                switch (_b.label) {\n                    case 0:\n                        props = Object.keys(entries[0]);\n                        count = 0;\n                        _a = entries.reduce(function (acc, entry) {\n                            var blings = Object.values(entry).map(function (v) {\n                                acc.values.push(v);\n                                count++;\n                                return '$' + count;\n                            });\n                            acc.inserts.push(\"(\" + blings.join(',') + \")\");\n                            return acc;\n                        }, { inserts: [], values: [] }), inserts = _a.inserts, values = _a.values;\n                        db_query = \"INSERT INTO \" + this.table + \" (\" + props.join(',') + \") VALUES \" + inserts.join(',') + \" RETURNING *\";\n                        _b.label = 1;\n                    case 1:\n                        _b.trys.push([1, 3, , 4]);\n                        return [4 /*yield*/, this.pool.query(db_query, values)];\n                    case 2:\n                        rows = (_b.sent()).rows;\n                        return [2 /*return*/, rows];\n                    case 3:\n                        e_4 = _b.sent();\n                        throw e_4;\n                    case 4: return [2 /*return*/];\n                }\n            });\n        }); };\n        this.single_insert = function (entry) { return __awaiter(_this, void 0, void 0, function () {\n            var _a, values, props, blings, db_query, rows, e_5;\n            return __generator(this, function (_b) {\n                switch (_b.label) {\n                    case 0:\n                        _a = Object.entries(entry).reduce(function (acc, _a, i) {\n                            var key = _a[0], value = _a[1];\n                            acc.values.push(value);\n                            acc.props.push(key);\n                            acc.blings.push('$' + (i + 1));\n                            return acc;\n                        }, { values: [], props: [], blings: [] }), values = _a.values, props = _a.props, blings = _a.blings;\n                        db_query = \"INSERT INTO \" + this.table + \" (\" + props.join(',') + \") VALUES (\" + blings.join(',') + \") RETURNING *\";\n                        _b.label = 1;\n                    case 1:\n                        _b.trys.push([1, 3, , 4]);\n                        return [4 /*yield*/, this.pool.query(db_query, values)];\n                    case 2:\n                        rows = (_b.sent()).rows;\n                        return [2 /*return*/, rows];\n                    case 3:\n                        e_5 = _b.sent();\n                        throw e_5;\n                    case 4: return [2 /*return*/];\n                }\n            });\n        }); };\n        this.single_update = function (entry, _id) { return __awaiter(_this, void 0, void 0, function () {\n            var _a, values, updates, db_query, rows, e_6;\n            return __generator(this, function (_b) {\n                switch (_b.label) {\n                    case 0:\n                        _a = Object.entries(entry).reduce(function (acc, _a, i) {\n                            var key = _a[0], value = _a[1];\n                            acc.values.push(value);\n                            acc.updates.push(key + \" =$\" + (i + 1));\n                            return acc;\n                        }, { values: [], updates: [] }), values = _a.values, updates = _a.updates;\n                        db_query = \"UPDATE \" + this.table + \" SET (\" + updates.join(',') + \") RETURNING * WHERE _id = \" + _id;\n                        _b.label = 1;\n                    case 1:\n                        _b.trys.push([1, 3, , 4]);\n                        return [4 /*yield*/, this.pool.query(db_query, values)];\n                    case 2:\n                        rows = (_b.sent()).rows;\n                        return [2 /*return*/, rows];\n                    case 3:\n                        e_6 = _b.sent();\n                        throw e_6;\n                    case 4: return [2 /*return*/];\n                }\n            });\n        }); };\n        this.destroy_by_id = function (_id) { return __awaiter(_this, void 0, void 0, function () {\n            var rows, e_7;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        _a.trys.push([0, 2, , 3]);\n                        return [4 /*yield*/, this.pool.query(\"DELETE FROM \" + this.table + \" WHERE _id=$2\", [_id])];\n                    case 1:\n                        rows = (_a.sent()).rows;\n                        return [2 /*return*/, rows];\n                    case 2:\n                        e_7 = _a.sent();\n                        throw e_7;\n                    case 3: return [2 /*return*/];\n                }\n            });\n        }); };\n        this.pool = pool;\n        this.table = table;\n    }\n    return Model;\n}());\nexports.Model = Model;\n\n\n//# sourceURL=webpack:///./src/dbaser.ts?");

/***/ })

/******/ });