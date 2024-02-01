// Execute command: tsc promises.ts; node promises.js
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
//*--------------------------------------------------------------------------------------------*//
//! 1.
//! Crea una funcion que devuelva una promesa que resuelva 
//! el string 'Hello World'
function helloWorld() {
    return Promise.resolve('Hello World');
}
helloWorld().then(function (result) { return console.log('1. ' + result); });
//*--------------------------------------------------------------------------------------------*//
//! 2.
//! Crea una funcion que devuelva una promesa que falle con el error 'Ups! Algo ha fallado'
function fail() {
    return Promise.reject('Ups! Algo ha fallado');
}
fail()
    .then(function (result) { return console.log('2. ' + result); }) // No hace nada aquí
    .catch(function (err) { return console.log('2. ' + err); }); // Como rechazamos, lo pilla el catch
//! Define la siguiente funcion fetch "falsa". Esta funcion, de forma aleatoria, resolverá 
//! correctamente o cascará error:
function fakeFetch(url) {
    return new Promise(function (resolve, reject) {
        if (Math.random() > 0.5) {
            resolve('Hello World');
        }
        else {
            reject('Ups! Algo ha fallado');
        }
    });
}
//*--------------------------------------------------------------------------------------------*//
//! 3.
//! Crea una funcion que llame a fakeFetch y que, si la promesa se resuelve correctamente, 
//! devuelva el string 'Todo ha ido bien'. Si la promesa falla, devolverá el 
//! string 'Ups! Algo ha fallado'. Esta funcion debe usar async/await y try/catch
function fakeFetchThenCatch() {
    return fakeFetch('https://immense-bookcase-91f.notion.site/Training-f49e5826b63a4cfb879e92d8b8c2d929')
        .then(function () { return 'Todo correcto'; })
        .catch(function () { return 'Ha ocurrido un fallo'; });
}
fakeFetchThenCatch()
    .then(function (result) { return console.log('3. ' + result); })
    .catch(function (err) { return console.log('3. ' + err); });
//*--------------------------------------------------------------------------------------------*//
//! 4.
//! Crea una funcion que llame a fakeFetch y que, si la promesa se resuelve correctamente, 
//! devuelva el string 'Todo ha ido bien'. Si la promesa falla, devolverá el 
//! string 'Ups! Algo ha fallado'. Esta funcion debe usar async/await y try/catch
function fakeFetchAsyncAwait() {
    return __awaiter(this, void 0, void 0, function () {
        var err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fakeFetch('https://immense-bookcase-91f.notion.site/Training-f49e5826b63a4cfb879e92d8b8c2d929')];
                case 1:
                    _a.sent();
                    return [2 /*return*/, 'Todo ha ido bien'];
                case 2:
                    err_1 = _a.sent();
                    return [2 /*return*/, 'Ups! Algo ha fallado'];
                case 3: return [2 /*return*/];
            }
        });
    });
}
console.log('4. ' + fakeFetchAsyncAwait());
//*--------------------------------------------------------------------------------------------*//
//! 5.
//! Crea una funcion que llame a fakeFetch 30 veces. Si alguna de las promesas falla, la 
//! funcion debe devolver el string 'Ups! Algo ha fallado'. (tip: usar Promise.all).
function fakeFetch30Times() {
    return __awaiter(this, void 0, void 0, function () {
        var promises, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    promises = Array.from({ length: 30 }, function () { return fakeFetch('https://google.com'); });
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, Promise.all(promises)];
                case 2:
                    _a.sent();
                    return [2 /*return*/, 'Todo ha ido bien'];
                case 3:
                    err_2 = _a.sent();
                    return [2 /*return*/, 'Ups! Algo ha fallado'];
                case 4: return [2 /*return*/];
            }
        });
    });
}
console.log('5. ' + fakeFetch30Times());
//*--------------------------------------------------------------------------------------------*//
//! 6.
//! Crea una funcion que llame a fakeFetch 30 veces en serie. Tras finalizar, la funcion 
//! debe devolver un array con todos los resultados de las promesas. Si alguna falla, no 
//! debe parar la ejecución de las demás promesas. (tip: usar for await)
function fakeFetch30TimesSerial() {
    return __awaiter(this, void 0, void 0, function () {
        var results, fakeFetches, _i, fakeFetches_1, fnFetch, fetchResult, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    results = [];
                    fakeFetches = Array.from({ length: 30 }, function () { return fakeFetch('https://google.com'); });
                    _i = 0, fakeFetches_1 = fakeFetches;
                    _a.label = 1;
                case 1:
                    if (!(_i < fakeFetches_1.length)) return [3 /*break*/, 6];
                    fnFetch = fakeFetches_1[_i];
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, fnFetch];
                case 3:
                    fetchResult = _a.sent();
                    results.push(fetchResult);
                    return [3 /*break*/, 5];
                case 4:
                    err_3 = _a.sent();
                    console.error('Error en fakeFetch', err_3);
                    return [3 /*break*/, 5];
                case 5:
                    _i++;
                    return [3 /*break*/, 1];
                case 6: return [2 /*return*/, results];
            }
        });
    });
}
//console.log('6. ' + fakeFetch30TimesSerial())
fakeFetch30TimesSerial()
    .then(function (results) { return console.log('6. ' + results); })
    .catch(function (err) { return console.log('6. ' + err); });
//*--------------------------------------------------------------------------------------------*//
