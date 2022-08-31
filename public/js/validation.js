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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/validation.js":
/*!************************************!*\
  !*** ./resources/js/validation.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var submit = document.getElementById('registration-submit');
submit.disabled = true;

function submitOn() {
  if (nameCheck && emailCheck && vatNumberCheck) {
    submit.disabled = false;
  } else {
    submit.disabled = true;
  }
}

var nameField = document.getElementById('name');
var nameFieldError = document.getElementById('name-error');
var nameCheck = false;
nameField.addEventListener('focusout', function () {
  var reg = /^[.@&]?[a-zA-Z0-9 ]+[ !.@&()]?[ a-zA-Z0-9!()]+/; // let reg = /^([a-zA-Z0-9 ']*)$/

  if (reg.test(nameField.value)) {
    nameFieldError.innerText = '';
    nameCheck = true;
  } else {
    nameFieldError.innerText = 'Il nome.....';
    nameCheck = false;
  }

  submitOn();
});
var emailField = document.getElementById('email');
var emailError = document.getElementById('email-error');
var emailCheck = false;
emailField.addEventListener('focusout', function () {
  var reg = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;

  if (reg.test(emailField.value)) {
    emailError.innerText = '';
    emailCheck = true;
  } else {
    emailError.innerText = 'La mail inserita non è valida';
    emailCheck = false;
  }

  submitOn();
});
var vatNumberField = document.getElementById('vat_number');
var vatNumberError = document.getElementById('vat_number-error');
var vatNumberCheck = false;
vatNumberField.addEventListener('focusout', function () {
  var reg = /^[0-9]{11}$/;

  if (reg.test(vatNumberField.value)) {
    vatNumberError.innerText = '';
    vatNumberCheck = true;
  } else {
    vatNumberError.innerText = 'La partita Iva deve contenere solo numeri e deve contenere 11 caratteri.';
    vatNumberCheck = false;
  }

  submitOn();
});
var addressField = document.getElementById('address');
var addressError = document.getElementById('address-error');
var addressCheck = false;
addressField.addEventListener('focusout', function () {
  var reg = /[0-9a-zA-Z]{6,}/;

  if (reg.test(addressField.value)) {
    addressError.innerText = '';
    addressCheck = true;
  } else if (addressField.value.length == 0) {
    addressError.innerText = 'Compila questo campo';
    addressCheck = false;
  } else {
    addressError.innerText = 'L\'indirizzo non è valido';
    addressCheck = false;
  }

  submitOn();
});
var phoneField = document.getElementById('phone');
var phoneError = document.getElementById('phone-error');
var phoneCheck = false;
phoneField.addEventListener('focusout', function () {
  var reg = /^[0-9-+\s]+$/;

  if (reg.test(phoneField.value)) {
    phoneError.innerText = '';
    phoneCheck = true;
    console.log('primo if');
  } else if (phoneField.value.length == 0) {
    phoneError.innerText = 'Compila questo campo';
    phoneCheck = false;
    console.log('secindo if');
  } else {
    phoneError.innerText = 'Il numero non è valido';
    phoneCheck = false;
    console.log('else ');
  }

  submitOn();
});

/***/ }),

/***/ 1:
/*!******************************************!*\
  !*** multi ./resources/js/validation.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/guidobuono/Desktop/Boolean/laravel/deliveboo/resources/js/validation.js */"./resources/js/validation.js");


/***/ })

/******/ });