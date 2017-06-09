webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__channel_channel_component__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contextual_contextual_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__notif_notif_component__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__query_query_component__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__thumbnail_thumbnail_component__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__video_control_video_control_component__ = __webpack_require__(104);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__channel_channel_component__["a" /* ChannelComponent */],
            __WEBPACK_IMPORTED_MODULE_7__contextual_contextual_component__["a" /* ContextualComponent */],
            __WEBPACK_IMPORTED_MODULE_8__notif_notif_component__["a" /* NotifComponent */],
            __WEBPACK_IMPORTED_MODULE_9__query_query_component__["a" /* QueryComponent */],
            __WEBPACK_IMPORTED_MODULE_10__thumbnail_thumbnail_component__["a" /* ThumbnailComponent */],
            __WEBPACK_IMPORTED_MODULE_11__video_control_video_control_component__["a" /* VideoControlComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_youtube_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_status_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContextualComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContextualComponent = (function () {
    function ContextualComponent(yt, status, router) {
        this.yt = yt;
        this.status = status;
        this.router = router;
        this.subs = [];
    }
    ContextualComponent.prototype.searchChannel = function (channelId, channelTitle) {
        this.status.contextualOpen = false;
        this.router.navigate(['channel', channelTitle, channelId]);
    };
    return ContextualComponent;
}());
ContextualComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'contextual',
        template: __webpack_require__(172),
        styles: [__webpack_require__(162)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_youtube_service__["a" /* YoutubeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_youtube_service__["a" /* YoutubeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_status_service__["a" /* StatusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_services_status_service__["a" /* StatusService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], ContextualComponent);

var _a, _b, _c;
//# sourceMappingURL=contextual.component.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotifComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotifComponent = (function () {
    function NotifComponent() {
    }
    NotifComponent.prototype.ngOnInit = function () {
    };
    return NotifComponent;
}());
NotifComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'notif',
        template: __webpack_require__(173),
        styles: [__webpack_require__(163)]
    }),
    __metadata("design:paramtypes", [])
], NotifComponent);

//# sourceMappingURL=notif.component.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_http_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_notif_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_services_youtube_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThumbnailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ThumbnailComponent = (function () {
    function ThumbnailComponent(sanitizer, httpService, notif, youtubeService, router) {
        this.sanitizer = sanitizer;
        this.httpService = httpService;
        this.notif = notif;
        this.youtubeService = youtubeService;
        this.router = router;
    }
    ThumbnailComponent.prototype.ngOnInit = function () {
        if (this.video.id.kind == "youtube#channel") {
            var unsafeStyle = "width: 74px; height: 74px";
            this.safeStyle = this.sanitizer.bypassSecurityTrustStyle(unsafeStyle);
        }
        else
            this.safeStyle = '';
    };
    ThumbnailComponent.prototype.getImage = function () {
        return this.video.snippet.thumbnails.medium.url;
    };
    ThumbnailComponent.prototype.isVideo = function () {
        return this.video.id.kind == 'youtube#video';
    };
    ThumbnailComponent.prototype.isChannel = function () {
        return this.video.id.kind == 'youtube#channel';
    };
    ThumbnailComponent.prototype.isPlaylist = function () {
        return this.video.id.kind == 'youtube#playlist';
    };
    ThumbnailComponent.prototype.clickThumbnail = function () {
        if (this.isVideo())
            this.emitVideo();
        else if (this.isChannel()) {
            console.log(this.video.id.channelId);
            this.router.navigate(['channel', this.video.snippet.channelTitle, this.video.id.channelId]);
        }
    };
    ThumbnailComponent.prototype.emitVideo = function () {
        var videoId = this.video.id.videoId;
        var params = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["d" /* URLSearchParams */]();
        params.set('videoId', videoId);
        this.httpService.send('sendVideoId', params);
        this.notif.addNotif();
    };
    return ThumbnailComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], ThumbnailComponent.prototype, "video", void 0);
ThumbnailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'thumbnail',
        template: __webpack_require__(175),
        styles: [__webpack_require__(165)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_services_http_service__["a" /* HttpService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_notif_service__["a" /* NotifService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services_notif_service__["a" /* NotifService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_app_services_youtube_service__["a" /* YoutubeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_services_youtube_service__["a" /* YoutubeService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _e || Object])
], ThumbnailComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=thumbnail.component.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_status_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_youtube_service__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoControlComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VideoControlComponent = (function () {
    function VideoControlComponent(status, yt, renderer) {
        this.status = status;
        this.yt = yt;
        this.renderer = renderer;
    }
    VideoControlComponent.prototype.ngAfterViewInit = function () {
        this.getVideoInfos();
    };
    VideoControlComponent.prototype.getParams = function () {
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
    };
    VideoControlComponent.prototype.getVideoInfos = function () {
        var _this = this;
        var params = this.getParams();
        this.yt.api('getVideoInfos', params, false).then(function (res) { return _this.updateInfos(res); }, function (err) { });
    };
    VideoControlComponent.prototype.updateInfos = function (data) {
        if (data != {}) {
            var volume = Math.round(data['volume'] * 100);
            this.renderer.setElementStyle(this.volume.nativeElement, 'width', volume + '%');
            var time = Math.round((data['currentTime'] / data['duration']) * 100);
            this.renderer.setElementStyle(this.timelineFront.nativeElement, 'width', time + '%');
        }
    };
    VideoControlComponent.prototype.toggleVideoState = function () {
        var params = this.getParams();
        this.yt.api('toggleVideoState', params, false);
    };
    VideoControlComponent.prototype.toggleFullscreen = function () {
        var params = this.getParams();
        this.yt.api('toggleFullscreen', params, false);
    };
    VideoControlComponent.prototype.decrVolume = function () {
        var _this = this;
        var params = this.getParams();
        this.yt.api('decrVolume', params, false).then(function (res) { return _this.getVideoInfos(); }, function (err) { });
    };
    VideoControlComponent.prototype.incrVolume = function () {
        var _this = this;
        var params = this.getParams();
        this.yt.api('incrVolume', params, false).then(function (res) { return _this.getVideoInfos(); }, function (err) { });
    };
    VideoControlComponent.prototype.setCurrentTime = function (event) {
        var _this = this;
        var params = this.getParams();
        console.log(event.layerX, this.timeline.nativeElement.offsetWidth, Math.round(event.layerX / this.timeline.nativeElement.offsetWidth * 100));
        params.set('percent', Math.round(event.layerX / this.timeline.nativeElement.offsetWidth * 100) + '');
        this.yt.api('setCurrentTime', params, false).then(function (res) { return _this.getVideoInfos(); }, function (err) { });
    };
    VideoControlComponent.prototype.showVideoCtrl = function () {
        this.status.videoCtrlOpen = true;
        this.status.contextualOpen = false;
        this.renderer.setElementClass(this.test.nativeElement, 'openVC', true);
        this.getVideoInfos();
    };
    VideoControlComponent.prototype.hideVideoCtrl = function () {
        this.status.videoCtrlOpen = false;
        this.renderer.setElementClass(this.test.nativeElement, 'openVC', false);
    };
    return VideoControlComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('volume'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _a || Object)
], VideoControlComponent.prototype, "volume", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('timeline'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _b || Object)
], VideoControlComponent.prototype, "timeline", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('timelineFront'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _c || Object)
], VideoControlComponent.prototype, "timelineFront", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('test'),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _d || Object)
], VideoControlComponent.prototype, "test", void 0);
VideoControlComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'video-ctrl',
        template: __webpack_require__(176),
        styles: [__webpack_require__(166)]
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_status_service__["a" /* StatusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_services_status_service__["a" /* StatusService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_youtube_service__["a" /* YoutubeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services_youtube_service__["a" /* YoutubeService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Renderer */]) === "function" && _g || Object])
], VideoControlComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=video-control.component.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__status_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var YoutubeService = (function () {
    function YoutubeService(http, auth, status) {
        this.http = http;
        this.auth = auth;
        this.status = status;
        this.apiUrl = "https://www.googleapis.com/youtube/v3/";
    }
    YoutubeService.prototype.getNextUrl = function (params) {
        if (params.has('q'))
            return '#/query/' + params.get('q');
        else if (params.has('id') && params.has('title'))
            return '#/channel/' + params.get('title') + '/' + params.get('id');
        else
            return '';
    };
    YoutubeService.prototype.handleResponse = function (res) {
        if (res.kind == "youtube#searchListResponse")
            this.videos = res.items;
        if (res.kind == "youtube#subscriptionListResponse")
            this.subs = res.items;
        this.status.spinnerOn = false;
    };
    YoutubeService.prototype.api = function (method, params, spin) {
        var _this = this;
        if (spin === undefined)
            this.status.spinnerOn = true;
        params.set('access_token', this.auth.access_token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({
            search: params
        });
        return this.http.get(location.protocol + '//' + location.host + location.pathname + 'api/' + method, options).toPromise().then(function (res) {
            console.log('OK', res.json());
            _this.handleResponse(res.json());
            return res.json();
        }, function (err) {
            console.log('ERROR', err);
            _this.auth.redirectToAuth(_this.getNextUrl(params));
        });
    };
    return YoutubeService;
}());
YoutubeService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__status_service__["a" /* StatusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__status_service__["a" /* StatusService */]) === "function" && _c || Object])
], YoutubeService);

var _a, _b, _c;
//# sourceMappingURL=youtube.service.js.map

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 170:
/***/ (function(module, exports) {

module.exports = "<div id=\"loading-ctn\" *ngIf=\"status.spinnerOn\">\n\n\t<div id=\"loading\"></div>\n\n</div>\n\n<div class=\"row navbar text-center\">\n\n\t<div class=\"shrink columns\">\n\t\t<button class=\"navbar-btn context-btn\" (click)=\"clickMenu()\"></button>\n\t</div>\n\n\t<div [hidden]=\"status.showInput\" class=\"columns brand\">Youdesk</div>\n\n\t<div [hidden]=\"!status.showInput\" class=\"columns no-padding relative\">\n\t\t<input #navInput class=\"nav-input\" type=\"search\" [(ngModel)]=\"youtubeQuery\" name=\"name\" (click)=\"clickInput()\" (ngModelChange)=\"getSuggests()\" (keypress)=\"handleInputKeyPress($event)\" autocomplete=\"off\">\n\n\t\t<div *ngIf=\"status.suggestsOpen\" class=\"suggests text-left\">\n\t\t\t<div *ngFor=\"let suggest of suggests[youtubeQuery]\" class=\"suggest\" (click)=\"completeYoutubeQuery(suggest)\">\n\t\t\t\t{{suggest}}\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n\n\t<div class=\"shrink columns\">\n\t\t<button (click)=\"clickSearch()\" class=\"navbar-btn search-btn\"></button>\n\t</div>\n\n\t<contextual class=\"text-left\"></contextual>\n\n</div>\n\n<div (click)=\"clickCore()\" id=\"core\" class=\"columns\">\n\n\t<router-outlet></router-outlet>\n\n</div>\n\n<notif></notif>\n\n<video-ctrl></video-ctrl>"

/***/ }),

/***/ 171:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"youtubeService.videos\" id=\"videos_ctn\">\n\n\t<ng-template ngFor let-video [ngForOf]=\"youtubeService.videos\">\n\n\t\t<thumbnail [video]=\"video\"></thumbnail>\n\n\t</ng-template>\n\n</div>"

/***/ }),

/***/ 172:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"status.contextualOpen\">\n\n\t<div class=\"context-ctn\">\n\n\t\t<div class=\"context-title\">Latest</div>\n\n\t</div>\n\n\t<div class=\"context-border\"></div>\n\n\t<div class=\"context-ctn\">\n\n\t\t<div class=\"context-title\">Subscriptions</div>\n\n\t\t<div *ngFor=\"let sub of yt.subs\" class=\"context-content\">\n\n\t\t\t<span><img src=\"{{sub.snippet.thumbnails.default.url}}\"></span>\n\n\t\t\t<div (click)=\"searchChannel(sub.snippet.resourceId.channelId, sub.snippet.title)\" class=\"content-title\">{{sub.snippet.title}}</div>\n\n\t\t</div>\n\n\t</div>\n\n</div>"

/***/ }),

/***/ 173:
/***/ (function(module, exports) {

module.exports = "<p>\n  notif works!\n</p>\n"

/***/ }),

/***/ 174:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"youtubeService.videos\" id=\"videos_ctn\">\n\n\t<ng-template ngFor let-video [ngForOf]=\"youtubeService.videos\">\n\n\t\t<thumbnail [video]=\"video\"></thumbnail>\n\n\t</ng-template>\n\n</div>"

/***/ }),

/***/ 175:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!isPlaylist()\" class=\"video-ctn\">\n\t<div class=\"thumbnail-ctn\">\n\t\t<span>\n\t\t\t<img (click)=\"clickThumbnail()\" src=\"{{getImage()}}\" [style]=\"safeStyle\">\n\t\t</span>\n\t</div>\n\n\t<div class=\"infos-ctn\">\n\n\t\t<div class=\"video-title\">{{video.snippet.title}}</div>\n\n\t\t<div *ngIf=\"isVideo()\" class=\"channel-title\">{{video.snippet.channelTitle}}</div>\n\n\t\t<div *ngIf=\"isVideo()\" class=\"video-infos\">{{video.snippet.publishedAt | date}}, {{video.snippet.publishedAt | date: 'HH:mm'}}</div>\n\n\t</div>\n</div>"

/***/ }),

/***/ 176:
/***/ (function(module, exports) {

module.exports = "<div #test id=\"video-ctrl-ctn\" [hidden]=\"!status.videoCtrlOpen\">\n\n\t<div id=\"video-ctrl\">\n\n\t\t<button (click)=\"toggleVideoState()\" id=\"play-pause-btn\"></button>\n\n\t\t<div id=\"volume-ctn\">\n\n\t\t\t<button (click)=\"decrVolume()\" class=\"volume-down-btn volume-btn\"></button>\n\n\t\t\t<div class=\"volume-back\">\n\t\t\t\t<div #volume class=\"volume-front\"></div>\n\t\t\t</div>\n\n\t\t\t<button (click)=\"incrVolume()\" class=\"volume-up-btn volume-btn\"></button>\n\n\t\t</div>\n\n\t\t<button (click)=\"toggleFullscreen()\" id=\"fullscreen-btn\"></button>\n\n\t\t<div id=\"timeline-ctn\">\n\n\t\t\t<div #timeline (click)=\"setCurrentTime($event)\" id=\"timeline-back\">\n\t\t\t\t<div #timelineFront id=\"timeline-front\"></div>\n\t\t\t</div>\n\n\t\t</div>\n\n\t</div>\n\n</div>\n\n<div id=\"video-ctrl-btn-ctn\" [hidden]=\"status.videoCtrlOpen\">\n\n\t<button (click)=\"showVideoCtrl()\" id=\"video-ctrl-btn\"></button>\n\n</div>"

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var StatusService = (function () {
    function StatusService() {
        this.showInput = false;
        this.contextualOpen = false;
        this.spinnerOn = false;
        this.suggestsOpen = false;
        this.videoCtrlOpen = false;
    }
    return StatusService;
}());
StatusService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], StatusService);

//# sourceMappingURL=status.service.js.map

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(92);


/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_cookies__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_cookies__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.url = 'https://accounts.google.com/o/oauth2/auth';
        this.client_id = '42957678009-9ohuunq6oagrf8jd6m1pem2d3arr6dke.apps.googleusercontent.com';
        this.response_type = 'code';
        this.scope = 'https://www.googleapis.com/auth/youtube.readonly';
        this.access_token = __WEBPACK_IMPORTED_MODULE_2_ng2_cookies__["Cookie"].get('access_token');
        if (!this.access_token) {
            this.redirectToAuth('');
        }
    }
    AuthService.prototype.redirectToAuth = function (next_url) {
        var redirect_uri = location.protocol + '//' + location.host;
        redirect_uri += location.pathname + 'token';
        var url = this.url;
        url += '?' + 'client_id=' + this.client_id;
        url += '&' + 'redirect_uri=' + redirect_uri;
        url += '&' + 'response_type=' + this.response_type;
        url += '&' + 'scope=' + this.scope;
        url += '&' + 'state=' + btoa(next_url);
        location.href = url;
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HttpService = (function () {
    function HttpService(http) {
        this.http = http;
    }
    HttpService.prototype.send = function (url, params) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({
            search: params
        });
        return this.http.get(url, options).toPromise()
            .then(function (res) { return res.json(); }, function (err) { return console.log("ERROR", err); });
    };
    return HttpService;
}());
HttpService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], HttpService);

var _a;
//# sourceMappingURL=http.service.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_youtube_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChannelComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChannelComponent = (function () {
    function ChannelComponent(youtubeService, route) {
        this.youtubeService = youtubeService;
        this.route = route;
    }
    ChannelComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('Query Component Init');
        this.sub = this.route.params.subscribe(function (_params) {
            var params = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* URLSearchParams */]();
            params.set('channelId', _params['id']);
            _this.youtubeService.api('getVideosOfChannel', params);
        });
    };
    ChannelComponent.prototype.ngOnDestroy = function () {
        console.log('Query Component Destroy');
        this.sub.unsubscribe();
    };
    return ChannelComponent;
}());
ChannelComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'channel',
        template: __webpack_require__(171),
        styles: [__webpack_require__(161)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_youtube_service__["a" /* YoutubeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_youtube_service__["a" /* YoutubeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object])
], ChannelComponent);

var _a, _b;
//# sourceMappingURL=channel.component.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_youtube_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QueryComponent = (function () {
    function QueryComponent(youtubeService, route) {
        this.youtubeService = youtubeService;
        this.route = route;
    }
    QueryComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('Query Component Init');
        this.sub = this.route.params.subscribe(function (_params) {
            var params = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* URLSearchParams */]();
            params.set('q', _params['q']);
            _this.youtubeService.api('getVideosFromQuery', params);
        });
    };
    QueryComponent.prototype.ngOnDestroy = function () {
        console.log('Query Component Destroy');
        this.sub.unsubscribe();
    };
    return QueryComponent;
}());
QueryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'query',
        template: __webpack_require__(174),
        styles: [__webpack_require__(164)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_youtube_service__["a" /* YoutubeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_youtube_service__["a" /* YoutubeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object])
], QueryComponent);

var _a, _b;
//# sourceMappingURL=query.component.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotifService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotifService = (function () {
    function NotifService() {
        this.notifs = [];
    }
    NotifService.prototype.addNotif = function () {
        var notif = {
            title: 'Success',
            core: 'Video send to electron app'
        };
        this.notifs.push(notif);
        var that = this;
        setTimeout(function () {
            that.notifs.splice(that.notifs.lastIndexOf(notif), 1);
        }, 2000);
    };
    NotifService.prototype.removeNotif = function (notif) {
        this.notifs.forEach(function (_notif) {
            if (notif == _notif)
                notif.timeLeft = 1;
        });
    };
    return NotifService;
}());
NotifService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], NotifService);

//# sourceMappingURL=notif.service.js.map

/***/ }),

/***/ 91:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 91;


/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(105);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_query_query_component__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_channel_channel_component__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_services_auth_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_services_http_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_services_status_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_services_notif_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_services_youtube_service__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        children: [
            { path: 'query/:q', component: __WEBPACK_IMPORTED_MODULE_2_app_query_query_component__["a" /* QueryComponent */] },
            { path: 'channel/:title/:id', component: __WEBPACK_IMPORTED_MODULE_3_app_channel_channel_component__["a" /* ChannelComponent */] },
            { path: '', redirectTo: '', pathMatch: 'full' }
        ]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes, { useHash: true })],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
        providers: [__WEBPACK_IMPORTED_MODULE_4_app_services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_5_app_services_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_6_app_services_status_service__["a" /* StatusService */], __WEBPACK_IMPORTED_MODULE_7_app_services_notif_service__["a" /* NotifService */], __WEBPACK_IMPORTED_MODULE_8_app_services_youtube_service__["a" /* YoutubeService */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_youtube_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_status_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_auth_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_services_http_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppComponent = (function () {
    function AppComponent(youtubeService, status, auth, http, router, renderer) {
        this.youtubeService = youtubeService;
        this.status = status;
        this.auth = auth;
        this.http = http;
        this.router = router;
        this.renderer = renderer;
        this.youtubeQuery = '';
        this.suggests = {};
    }
    AppComponent.prototype.search = function () {
        var that = this;
        setTimeout(function () {
            that.navInput.nativeElement.focus();
        }, 30);
        if (this.youtubeQuery == '')
            return;
        this.router.navigate(['query', this.youtubeQuery]);
    };
    AppComponent.prototype.handleInputKeyPress = function (event) {
        if (event.keyCode == 13)
            this.clickSearch();
    };
    AppComponent.prototype.clickCore = function () {
        this.hideContextual();
        this.hideVideoCtrl();
    };
    AppComponent.prototype.clickSearch = function () {
        this.hideContextual();
        this.showInput();
        this.hideSuggests();
        this.hideVideoCtrl();
        this.search();
    };
    AppComponent.prototype.clickMenu = function () {
        this.hideInput();
        this.toggleContextual();
        this.hideVideoCtrl();
    };
    AppComponent.prototype.clickInput = function () {
        this.status.suggestsOpen = true;
        this.hideVideoCtrl();
    };
    AppComponent.prototype.hideVideoCtrl = function () {
        this.status.videoCtrlOpen = false;
    };
    AppComponent.prototype.toggleContextual = function () {
        this.status.contextualOpen = !this.status.contextualOpen;
        if (this.status.contextualOpen) {
            var params = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["d" /* URLSearchParams */]();
            this.youtubeService.api('getMySubscriptions', params);
        }
    };
    AppComponent.prototype.hideContextual = function () {
        this.status.contextualOpen = false;
    };
    AppComponent.prototype.showInput = function () {
        this.status.showInput = true;
    };
    AppComponent.prototype.hideInput = function () {
        this.status.showInput = false;
    };
    AppComponent.prototype.hideSuggests = function () {
        this.status.suggestsOpen = false;
    };
    AppComponent.prototype.toggleSuggests = function () {
        this.status.suggestsOpen = !this.status.suggestsOpen;
    };
    AppComponent.prototype.getSuggests = function () {
        var _this = this;
        if (!this.suggests[this.youtubeQuery]) {
            var params = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["d" /* URLSearchParams */]();
            params.set('q', this.youtubeQuery);
            this.http.send(location.protocol + '//' + location.host + location.pathname + 'api/getSuggestQuery', params).then(function (res) {
                _this.suggests[res[0]] = res[1];
            }, function (err) {
            });
        }
    };
    AppComponent.prototype.completeYoutubeQuery = function (suggest) {
        this.youtubeQuery = suggest;
        this.toggleSuggests();
        this.clickSearch();
        this.search();
    };
    return AppComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('navInput'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _a || Object)
], AppComponent.prototype, "navInput", void 0);
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(170),
        styles: [__webpack_require__(160)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_youtube_service__["a" /* YoutubeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_youtube_service__["a" /* YoutubeService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_status_service__["a" /* StatusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_services_status_service__["a" /* StatusService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services_auth_service__["a" /* AuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_app_services_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_services_http_service__["a" /* HttpService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Renderer */]) === "function" && _g || Object])
], AppComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=app.component.js.map

/***/ })

},[214]);
//# sourceMappingURL=main.bundle.js.map