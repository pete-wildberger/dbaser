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
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Model = /** @class */ (function () {\n    function Model(pool, table) {\n        var _this = this;\n        this.request = function (sql_query, params) {\n            return new Promise(function (resolve, reject) {\n                _this.pool.connect(function (err, client, done) {\n                    if (err) {\n                        done();\n                        return reject(err);\n                    }\n                    client.query(sql_query, params, function (err, result) {\n                        done();\n                        if (err) {\n                            reject(err);\n                        }\n                        resolve(result.rows);\n                    });\n                });\n            });\n        };\n        this.find_all = function (orderBy) {\n            var query = \"SELECT * FROM \" + _this.table;\n            if (typeof orderBy !== undefined) {\n                query += \" ORDER BY \" + orderBy;\n                console.log(query);\n            }\n            return new Promise(function (resolve, reject) {\n                _this.pool.connect(function (err, client, done) {\n                    if (err) {\n                        done();\n                        return reject(err);\n                    }\n                    client.query(query, function (err, result) {\n                        done();\n                        if (err) {\n                            console.log(err);\n                            reject(err);\n                        }\n                        resolve(result.rows);\n                    });\n                });\n            });\n        };\n        this.find_by_id = function (_id) {\n            return new Promise(function (resolve, reject) {\n                _this.pool.connect(function (err, client, done) {\n                    if (err) {\n                        done();\n                        return reject(err);\n                    }\n                    client.query(\"SELECT * FROM \" + _this.table + \" WHERE _id=$1\", [_id], function (err, result) {\n                        done();\n                        if (err) {\n                            reject(err);\n                        }\n                        resolve(result.rows[0]);\n                    });\n                });\n            });\n        };\n        this.bulk_insert = function (entries) {\n            var props = Object.keys(entries[0]);\n            var count = 1;\n            var values = [];\n            var inserts = [];\n            entries.forEach(function (entry) {\n                var blings = [];\n                for (var prop in entry) {\n                    values.push(entry[prop]);\n                    blings.push('$' + count);\n                    count++;\n                }\n                inserts.push(\"(\" + blings.join(',') + \")\");\n            });\n            var db_query = \"INSERT INTO \" + _this.table + \" (\" + props.join(',') + \") VALUES \" + inserts.join(',') + \" RETURNING *\";\n            return new Promise(function (resolve, reject) {\n                _this.pool.connect(function (err, client, done) {\n                    if (err) {\n                        done();\n                        return reject(err);\n                    }\n                    client.query(db_query, values, function (err, result) {\n                        done();\n                        if (err) {\n                            reject(err);\n                        }\n                        resolve(result);\n                    });\n                });\n            });\n        };\n        this.single_insert = function (entry) {\n            var blings = [];\n            var count = 1;\n            var values = [];\n            var props = [];\n            for (var prop in entry) {\n                values.push(entry[prop]);\n                props.push(prop);\n                blings.push('$' + count);\n                count++;\n            }\n            var db_query = \"INSERT INTO \" + _this.table + \" (\" + props.join(',') + \") VALUES (\" + blings.join(',') + \") RETURNING *\";\n            return new Promise(function (resolve, reject) {\n                _this.pool.connect(function (err, client, done) {\n                    if (err) {\n                        done();\n                        return reject(err);\n                    }\n                    client.query(db_query, values, function (err, result) {\n                        done();\n                        if (err) {\n                            reject(err);\n                        }\n                        resolve(result.rows[0]);\n                    });\n                });\n            });\n        };\n        this.single_update = function (entry, _id) {\n            var count = 1;\n            var values = [];\n            var updates = [];\n            for (var prop in entry) {\n                values.push(entry[prop]);\n                updates.push(prop + \" =\" + '$' + count);\n                count++;\n            }\n            var db_query = \"UPDATE \" + _this.table + \" SET (\" + updates.join(',') + \") RETURNING * WHERE _id = \" + _id;\n            return new Promise(function (resolve, reject) {\n                _this.pool.connect(function (err, client, done) {\n                    if (err) {\n                        done();\n                        return reject(err);\n                    }\n                    client.query(db_query, values, function (err, result) {\n                        done();\n                        if (err) {\n                            reject(err);\n                        }\n                        resolve(result);\n                    });\n                });\n            });\n        };\n        this.destroy_by_id = function (_id) {\n            return new Promise(function (resolve, reject) {\n                _this.pool.connect(function (err, client, done) {\n                    if (err) {\n                        done();\n                        return reject(err);\n                    }\n                    client.query(\"DELETE FROM \" + _this.table + \" WHERE _id=$2\", [_id], function (err, result) {\n                        done();\n                        if (err) {\n                            reject(err);\n                        }\n                        resolve(result);\n                    });\n                });\n            });\n        };\n        this.pool = pool;\n        this.table = table;\n    }\n    return Model;\n}());\nexports.Model = Model;\n\n\n//# sourceURL=webpack:///./src/dbaser.ts?");

/***/ })

/******/ });