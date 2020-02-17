(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/assets/app/app.component.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/assets/app/app.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <header>\r\n    <h1>Media Watch List</h1>\r\n    <p class=\"description\">Keeping track of the media I want to watch.</p>\r\n  </header>\r\n  <mw-media-item-list></mw-media-item-list>\r\n</section>\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/assets/app/media-item-list.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/assets/app/media-item-list.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <mw-media-item *ngFor=\"let mediaItem of mediaItems\"\n                 [mediaItem]=\"mediaItem\"\n                 (delete)=\"onMediaItemDelete($event)\"\n                 [ngClass]=\"{'medium-movies': mediaItem.medium==='Movies', 'medium-series':mediaItem.medium === 'Series'}\"\n  ></mw-media-item>\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/assets/app/media-item.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/assets/app/media-item.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>{{ mediaItem.name }}</h2>\r\n<ng-template [ngIf]=\"mediaItem.watchedOn\">\r\n  <div>Watched on {{ mediaItem.watchedOn }}</div>\r\n</ng-template>\r\n<div>{{ mediaItem.category }}</div>\r\n<div>{{ mediaItem.year }}</div>\r\n<div class=\"tools\">\r\n  <svg [mwFavourite]=\"mediaItem.isFavorite\" class=\"favorite\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\">\r\n    <path d=\"M12 9.229c.234-1.12 1.547-6.229 5.382-6.229 2.22 0 4.618 1.551 4.618 5.003 0 3.907-3.627 8.47-10 12.629-6.373-4.159-10-8.722-10-12.629 0-3.484 2.369-5.005 4.577-5.005 3.923 0 5.145 5.126 5.423 6.231zm-12-1.226c0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-7.962-9.648-9.028-12-3.737-2.338-5.262-12-4.27-12 3.737z\"\r\n    />\r\n  </svg>\r\n  <a class=\"delete\" (click)=\"onDelete()\">\r\n    remove\r\n  </a>\r\n  <a class=\"details\">\r\n    watch it\r\n  </a>\r\n</div>\r\n"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/assets/app/app.component.css":
/*!******************************************!*\
  !*** ./src/assets/app/app.component.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n  display: flex;\r\n  min-height: 100%;\r\n}\r\nnav {\r\n  width: 68px;\r\n  background-color: #53ace4;\r\n}\r\nnav .icon {\r\n  width: 48px;\r\n  height: 48px;\r\n  margin: 10px;\r\n}\r\nsection {\r\n  width: 100%;\r\n  background-color: #32435b;\r\n}\r\nsection > header {\r\n  color: #ffffff;\r\n  padding: 10px;\r\n}\r\nsection > header > h1 {\r\n  font-size: 2em;\r\n}\r\nsection > header .description {\r\n  font-style: italic;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0FBQ2Q7QUFDQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbn1cclxubmF2IHtcclxuICB3aWR0aDogNjhweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTNhY2U0O1xyXG59XHJcbm5hdiAuaWNvbiB7XHJcbiAgd2lkdGg6IDQ4cHg7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG5zZWN0aW9uIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzI0MzViO1xyXG59XHJcbnNlY3Rpb24gPiBoZWFkZXIge1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuc2VjdGlvbiA+IGhlYWRlciA+IGgxIHtcclxuICBmb250LXNpemU6IDJlbTtcclxufVxyXG5zZWN0aW9uID4gaGVhZGVyIC5kZXNjcmlwdGlvbiB7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/assets/app/app.component.ts":
/*!*****************************************!*\
  !*** ./src/assets/app/app.component.ts ***!
  \*****************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.firstMediaItem = {
            id: 1,
            name: 'Firebug',
            medium: 'Series',
            category: 'Science Fiction',
            year: 2010,
            watchedOn: null,
            isFavorite: false
        };
    }
    AppComponent.prototype.onDeleteMediaItem = function (mediaItem) {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'mw-app',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/assets/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/assets/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/assets/app/app.module.ts":
/*!**************************************!*\
  !*** ./src/assets/app/app.module.ts ***!
  \**************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/assets/app/app.component.ts");
/* harmony import */ var _media_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./media-item.component */ "./src/assets/app/media-item.component.ts");
/* harmony import */ var _media_item_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./media-item-list.component */ "./src/assets/app/media-item-list.component.ts");
/* harmony import */ var _favourite_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./favourite.directive */ "./src/assets/app/favourite.directive.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"]],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _media_item_component__WEBPACK_IMPORTED_MODULE_4__["MediaItemComponent"], _media_item_list_component__WEBPACK_IMPORTED_MODULE_5__["MediaItemListComponent"], _favourite_directive__WEBPACK_IMPORTED_MODULE_6__["FavouriteDirective"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/assets/app/favourite.directive.ts":
/*!***********************************************!*\
  !*** ./src/assets/app/favourite.directive.ts ***!
  \***********************************************/
/*! exports provided: FavouriteDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouriteDirective", function() { return FavouriteDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FavouriteDirective = /** @class */ (function () {
    function FavouriteDirective() {
        this.isFavourite = true;
        this.hovering = false;
    }
    FavouriteDirective.prototype.onMouseEnter = function () {
        this.hovering = true;
    };
    FavouriteDirective.prototype.onMouseLeave = function () {
        this.hovering = false;
    };
    Object.defineProperty(FavouriteDirective.prototype, "mwFavourite", {
        set: function (value) {
            this.isFavourite = value;
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.is-favourite'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FavouriteDirective.prototype, "isFavourite", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.is-favourite-hovering'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FavouriteDirective.prototype, "hovering", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseenter'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], FavouriteDirective.prototype, "onMouseEnter", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseleave'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], FavouriteDirective.prototype, "onMouseLeave", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], FavouriteDirective.prototype, "mwFavourite", null);
    FavouriteDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[mwFavourite]'
        })
    ], FavouriteDirective);
    return FavouriteDirective;
}());



/***/ }),

/***/ "./src/assets/app/media-item-list.component.css":
/*!******************************************************!*\
  !*** ./src/assets/app/media-item-list.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n  display: flex;\r\n  height: calc(100% - 95px);\r\n  flex-direction: column;\r\n  padding: 10px;\r\n}\r\nheader {\r\n  color: #c6c5c3;\r\n}\r\nheader.medium-movies {\r\n  color: #53ace4;\r\n}\r\nheader.medium-series {\r\n  color: #45bf94;\r\n}\r\nheader > h2 {\r\n  font-size: 1.4em;\r\n}\r\nheader > h2.error {\r\n  color: #d93a3e;\r\n}\r\nsection {\r\n  flex: 1;\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  align-content: flex-start;\r\n}\r\nsection > media-item {\r\n  margin: 10px;\r\n}\r\nfooter {\r\n  text-align: right;\r\n}\r\nfooter .icon {\r\n  width: 64px;\r\n  height: 64px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZGlhLWl0ZW0tbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLE9BQU87RUFDUCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2QiLCJmaWxlIjoibWVkaWEtaXRlbS1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDk1cHgpO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5oZWFkZXIge1xyXG4gIGNvbG9yOiAjYzZjNWMzO1xyXG59XHJcbmhlYWRlci5tZWRpdW0tbW92aWVzIHtcclxuICBjb2xvcjogIzUzYWNlNDtcclxufVxyXG5oZWFkZXIubWVkaXVtLXNlcmllcyB7XHJcbiAgY29sb3I6ICM0NWJmOTQ7XHJcbn1cclxuaGVhZGVyID4gaDIge1xyXG4gIGZvbnQtc2l6ZTogMS40ZW07XHJcbn1cclxuaGVhZGVyID4gaDIuZXJyb3Ige1xyXG4gIGNvbG9yOiAjZDkzYTNlO1xyXG59XHJcbnNlY3Rpb24ge1xyXG4gIGZsZXg6IDE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbn1cclxuc2VjdGlvbiA+IG1lZGlhLWl0ZW0ge1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG5mb290ZXIge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbmZvb3RlciAuaWNvbiB7XHJcbiAgd2lkdGg6IDY0cHg7XHJcbiAgaGVpZ2h0OiA2NHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/assets/app/media-item-list.component.ts":
/*!*****************************************************!*\
  !*** ./src/assets/app/media-item-list.component.ts ***!
  \*****************************************************/
/*! exports provided: MediaItemListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaItemListComponent", function() { return MediaItemListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MediaItemListComponent = /** @class */ (function () {
    function MediaItemListComponent() {
        this.mediaItems = [
            {
                id: 1,
                name: 'Firebug',
                medium: 'Series',
                category: 'Science Fiction',
                year: 2010,
                watchedOn: 1294166565384,
                isFavorite: false
            },
            {
                id: 2,
                name: 'The Small Tall',
                medium: 'Movies',
                category: 'Comedy',
                year: 2015,
                watchedOn: null,
                isFavorite: true
            }, {
                id: 3,
                name: 'The Redemption',
                medium: 'Movies',
                category: 'Action',
                year: 2016,
                watchedOn: null,
                isFavorite: false
            }, {
                id: 4,
                name: 'Hoopers',
                medium: 'Series',
                category: 'Drama',
                year: null,
                watchedOn: null,
                isFavorite: true
            }, {
                id: 5,
                name: 'Happy Joe: Cheery Road',
                medium: 'Movies',
                category: 'Action',
                year: 2015,
                watchedOn: 1457166565384,
                isFavorite: false
            }
        ];
    }
    MediaItemListComponent.prototype.onMediaItemDelete = function (mediaItem) { };
    MediaItemListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'mw-media-item-list',
            template: __webpack_require__(/*! raw-loader!./media-item-list.component.html */ "./node_modules/raw-loader/index.js!./src/assets/app/media-item-list.component.html"),
            styles: [__webpack_require__(/*! ./media-item-list.component.css */ "./src/assets/app/media-item-list.component.css")]
        })
    ], MediaItemListComponent);
    return MediaItemListComponent;
}());



/***/ }),

/***/ "./src/assets/app/media-item.component.css":
/*!*************************************************!*\
  !*** ./src/assets/app/media-item.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 140px;\r\n  height: 200px;\r\n  border: 2px solid;\r\n  background-color: #29394b;\r\n  padding: 10px;\r\n  color: #bdc2c5;\r\n  margin: 0 12px 12px 0;\r\n}\r\nh2 {\r\n  font-size: 1.6em;\r\n  flex: 1;\r\n}\r\n:host(.medium-movies) {\r\n  border-color: #53ace4;\r\n}\r\n:host(.medium-movies) > h2 {\r\n  color: #53ace4;\r\n}\r\n:host(.medium-series) {\r\n  border-color: #45bf94;\r\n}\r\n:host(.medium-series) > h2 {\r\n  color: #45bf94;\r\n}\r\n.tools {\r\n  margin-top: 8px;\r\n  display: flex;\r\n  flex-wrap: nowrap;\r\n  justify-content: space-between;\r\n}\r\n.favorite {\r\n  width: 24px;\r\n  height: 24px;\r\n  fill: #bdc2c5;\r\n  cursor: pointer;\r\n}\r\n.favorite.is-favorite {\r\n  fill: #37ad79;\r\n}\r\n.favorite.is-favorite-hovering {\r\n  fill: #45bf94;\r\n}\r\n.favorite.is-favorite.is-favorite-hovering {\r\n  fill: #ec4342;\r\n}\r\n.delete {\r\n  display: block;\r\n  background-color: #ec4342;\r\n  padding: 4px;\r\n  font-size: .8em;\r\n  border-radius: 4px;\r\n  color: #ffffff;\r\n  cursor: pointer;\r\n}\r\n.details {\r\n  display: block;\r\n  background-color: #37ad79;\r\n  padding: 4px;\r\n  font-size: .8em;\r\n  border-radius: 4px;\r\n  color: #ffffff;\r\n  text-decoration: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZGlhLWl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGFBQWE7RUFDYixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsT0FBTztBQUNUO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkIiLCJmaWxlIjoibWVkaWEtaXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogMTQwcHg7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBib3JkZXI6IDJweCBzb2xpZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkzOTRiO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgY29sb3I6ICNiZGMyYzU7XHJcbiAgbWFyZ2luOiAwIDEycHggMTJweCAwO1xyXG59XHJcbmgyIHtcclxuICBmb250LXNpemU6IDEuNmVtO1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuOmhvc3QoLm1lZGl1bS1tb3ZpZXMpIHtcclxuICBib3JkZXItY29sb3I6ICM1M2FjZTQ7XHJcbn1cclxuOmhvc3QoLm1lZGl1bS1tb3ZpZXMpID4gaDIge1xyXG4gIGNvbG9yOiAjNTNhY2U0O1xyXG59XHJcbjpob3N0KC5tZWRpdW0tc2VyaWVzKSB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNDViZjk0O1xyXG59XHJcbjpob3N0KC5tZWRpdW0tc2VyaWVzKSA+IGgyIHtcclxuICBjb2xvcjogIzQ1YmY5NDtcclxufVxyXG4udG9vbHMge1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4uZmF2b3JpdGUge1xyXG4gIHdpZHRoOiAyNHB4O1xyXG4gIGhlaWdodDogMjRweDtcclxuICBmaWxsOiAjYmRjMmM1O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uZmF2b3JpdGUuaXMtZmF2b3JpdGUge1xyXG4gIGZpbGw6ICMzN2FkNzk7XHJcbn1cclxuLmZhdm9yaXRlLmlzLWZhdm9yaXRlLWhvdmVyaW5nIHtcclxuICBmaWxsOiAjNDViZjk0O1xyXG59XHJcbi5mYXZvcml0ZS5pcy1mYXZvcml0ZS5pcy1mYXZvcml0ZS1ob3ZlcmluZyB7XHJcbiAgZmlsbDogI2VjNDM0MjtcclxufVxyXG4uZGVsZXRlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWM0MzQyO1xyXG4gIHBhZGRpbmc6IDRweDtcclxuICBmb250LXNpemU6IC44ZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uZGV0YWlscyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM3YWQ3OTtcclxuICBwYWRkaW5nOiA0cHg7XHJcbiAgZm9udC1zaXplOiAuOGVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/assets/app/media-item.component.ts":
/*!************************************************!*\
  !*** ./src/assets/app/media-item.component.ts ***!
  \************************************************/
/*! exports provided: MediaItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaItemComponent", function() { return MediaItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MediaItemComponent = /** @class */ (function () {
    function MediaItemComponent() {
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    MediaItemComponent.prototype.onDelete = function () {
        console.log("Remove element.");
        this.delete.emit(this.mediaItem);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MediaItemComponent.prototype, "mediaItem", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MediaItemComponent.prototype, "delete", void 0);
    MediaItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'mw-media-item',
            template: __webpack_require__(/*! raw-loader!./media-item.component.html */ "./node_modules/raw-loader/index.js!./src/assets/app/media-item.component.html"),
            styles: [__webpack_require__(/*! ./media-item.component.css */ "./src/assets/app/media-item.component.css")]
        })
    ], MediaItemComponent);
    return MediaItemComponent;
}());



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _assets_app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/app/app.module */ "./src/assets/app/app.module.ts");


Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__["platformBrowserDynamic"])().bootstrapModule(_assets_app_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\DinioDinev\Projects\Angular Essential Training\angular-essential-training\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map