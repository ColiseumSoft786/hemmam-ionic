webpackJsonp([9],{

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CertificatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the CertificatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CertificatePage = /** @class */ (function () {
    function CertificatePage(menuCtrl, http, loadingCtrl, toastCtrl) {
        var _this = this;
        this.menuCtrl = menuCtrl;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.data = {
            "header": "Catalogue",
            "status": "",
            "request": "",
            "items": [
                {
                    "id": 1,
                    "title": "Black dualshock controller",
                    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    "image": "assets/certificateicon.png",
                    "expandItems": [
                        {
                            "id": "1",
                            "title": "Objective",
                            "description": "Lorem ipsum",
                            "image": "assets/certificateicon.png",
                            "details": "$399.99"
                        }
                    ]
                }
            ]
        };
        this.events = {
            'onItemClick': function (item) {
                console.log("onItemClick");
            }
        };
        this.userdata = JSON.parse(localStorage.getItem('user'));
        this.id = this.userdata.id;
        var fetch = {
            userid: this.id
        };
        var loader = this.loadingCtrl.create({
            content: "... ارجوك انتظر",
        });
        loader.present();
        this.http.get('http://api.hemam.online/userdate', { params: fetch }).map(function (res) { return res.json(); }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].create(error.json()); }).subscribe(function (fetchdata) {
            var fresult = fetchdata;
            _this.fetchdata = fetchdata;
            _this.data.status = _this.userinfo;
            _this.data.request = fresult.certificate_status;
            loader.dismiss();
            if (fresult == 0) {
                console.log('oh no');
            }
            else {
                console.log('ok');
            }
        }, function (err) {
            loader.dismiss();
            var toast = _this.toastCtrl.create({
                message: 'شيء ما خطأ. حاول مرة اخرى',
                duration: 4000
            });
            toast.present();
        });
    }
    CertificatePage.prototype.certificaterequest = function () {
        var _this = this;
        var fetch = {
            userid: this.id
        };
        var loader = this.loadingCtrl.create({
            content: "... ارجوك انتظر",
        });
        loader.present();
        this.http.get('http://api.hemam.online/certificate_request', { params: fetch }).map(function (res) { return res.json(); }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].create(error.json()); }).subscribe(function (data) {
            var result = data;
            _this.data = data;
            console.log(result);
            loader.dismiss();
            if (result == 0) {
                console.log('oh no');
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: 'تم إرسال الطلب بنجاح',
                    duration: 4000
                });
                toast.present();
                console.log('okk');
            }
        }, function (err) {
            loader.dismiss();
            var toast = _this.toastCtrl.create({
                message: 'شيء ما خطأ. حاول مرة اخرى',
                duration: 4000
            });
            toast.present();
        });
    };
    CertificatePage.prototype.onEvent = function (event, item, e) {
        if (this.events[event]) {
            this.events[event](item);
        }
    };
    CertificatePage.prototype.toggleGroup = function (group) {
        group.show = !group.show;
    };
    CertificatePage.prototype.isGroupShown = function (group) {
        return group.show;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], CertificatePage.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */])
    ], CertificatePage.prototype, "content", void 0);
    CertificatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-certificate',template:/*ion-inline-start:"/Users/macosx/Desktop/Ionic/hemmam_ionic_/src/pages/certificate/certificate.html"*/'<!--\n  Generated template for the CertificatePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>شهادة</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-grid no-padding *ngIf="data != null">\n    <ion-row>\n      <ion-col col-12>\n        <!-- Header List Big Image -->\n        <ion-list-header box-shadow no-margin no-lines>\n          <h1 header-title *ngIf="data.request == 1 " align="right"> آخر طلب للحصول على الشهادة معلق </h1>\n          <h1 header-title *ngIf="data.request == 10 " align="right"> تم إرسال شهادتك ، يرجى التحقق من E-mail الخاص بك </h1>\n          <h1 header-title *ngIf="data.request == 0 " align="right"> يمكنك الحصول على الشهادة </h1>\n        </ion-list-header>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-col col-12  align-self-end *ngIf="data.request == 0 ">\n    <button ion-button outline block (click)="certificaterequest()">\n      طلب الشهادة\n    </button>\n  </ion-col>\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/macosx/Desktop/Ionic/hemmam_ionic_/src/pages/certificate/certificate.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], CertificatePage);
    return CertificatePage;
}());

//# sourceMappingURL=certificate.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChallengePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_chooser__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_media_capture__ = __webpack_require__(236);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














/**
 * Generated class for the ChallengePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChallengePage = /** @class */ (function () {
    function ChallengePage(mediaCapture, chooser, platform, navParams, transfer, file, camera, menuCtrl, navCtrl, http, loadingCtrl, toastCtrl) {
        var _this = this;
        this.mediaCapture = mediaCapture;
        this.chooser = chooser;
        this.platform = platform;
        this.navParams = navParams;
        this.transfer = transfer;
        this.file = file;
        this.camera = camera;
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.data = {
            "firstName": "First Name",
            "lastName": "Last Name",
            "addressLine1": "Address Line 1",
            "addressLine2": "Address Line 2",
            "city": "City",
            "zipCode": "Zip Code",
            "button": "Submit",
            "btn": "enabled"
        };
        this.events = {
            "onSubmit": function (item) {
                console.log("onSubmit");
            }
        };
        this.videoset = false;
        this.menuCtrl.enable(true, 'logMenu');
        if (localStorage.getItem("user") === null) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
        }
        else {
            this.userdata = JSON.parse(localStorage.getItem('user'));
            this.name = this.userdata.name;
            this.email = this.userdata.email;
            //
            this.id = this.userdata.id;
            if (this.userdata.level_status == null) {
                this.videolevel = 1;
            }
            else {
                this.videolevel = this.userdata.level_status.id;
            }
            // fetching data
            var fetch_1 = {
                userid: this.videolevel
            };
            var loader_1 = this.loadingCtrl.create({
                content: " ... ارجوك انتظر",
            });
            loader_1.present();
            this.http.get('http://api.hemam.online/tasksssss', { params: fetch_1 }).map(function (res) { return res.json(); }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_9_rxjs__["Observable"].create(error.json()); }).subscribe(function (fetchdata) {
                var fresult = fetchdata;
                _this.fetchdata = fetchdata;
                _this.ressult = fresult;
                loader_1.dismiss();
                if (fresult == 0) {
                    var toast = _this.toastCtrl.create({
                        message: '* خطأ في الخادم ، يرجى إعادة المحاولة لاحقًا',
                        duration: 4000
                    });
                    toast.present();
                }
                else {
                }
            }, function (err) {
                loader_1.dismiss();
                var toast = _this.toastCtrl.create({
                    message: 'شيء ما خطأ. حاول مرة اخرى',
                    duration: 4000
                });
                toast.present();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard__["a" /* DashboardPage */]);
            });
            // fetching data close .
        }
    }
    ChallengePage.prototype.uploadvideo = function () {
        var _this = this;
        if (this.firstName == '' || this.task == '' || this.imgdata == null) {
            var toast = this.toastCtrl.create({
                message: 'بيانات الاعتماد الخاصة بك ليست صحيحة',
                duration: 4000
            });
            toast.present();
        }
        else {
            console.log("clicked submit btn");
            var datta = {
                videotask: this.task,
                videotitle: this.firstName,
                userid: this.id,
                level: this.videolevel
            };
            var loader_2 = this.loadingCtrl.create({
                content: " ... جلب البيانات",
            });
            loader_2.present();
            this.http.get('http://api.hemam.online/video', { params: datta }).map(function (res) { return res.json(); }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_9_rxjs__["Observable"].create(error.json()); }).subscribe(function (dataa) {
                var result = dataa;
                _this.vid = dataa;
                console.log(result);
                loader_2.dismiss();
                if (result != 0) {
                    _this.upload(result);
                    var toast = _this.toastCtrl.create({
                        message: 'تم تحميل الفيديو بنجاح ',
                        duration: 4000
                    });
                    toast.present();
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: 'بيانات الاعتماد الخاصة بك ليست صحيحة',
                        duration: 4000
                    });
                    toast.present();
                }
            }, function (err) {
                loader_2.dismiss();
                var toast = _this.toastCtrl.create({
                    message: 'شيء ما خطأ. حاول مرة اخرى',
                    duration: 4000
                });
                toast.present();
            });
        }
    };
    ChallengePage.prototype.changephoto = function () {
        /*this.chooser.getFile('video/!*')
                 .then(file => this.upload(file) )
                 .catch((error: any) => alert(error));*/
        var options = { limit: 1, duration: 30 };
        this.mediaCapture.captureVideo(options)
            .then(function (data) { return alert(data[0].fullPath); }, function (err) { return console.error(err); });
        /*const camera: any = navigator['camera'];
        camera.getPicture(imageData => {
            this.myphoto = null;
            this.imgdata = imageData;
            this.upload(1);
            this.selected = 'Video has been selected';
        }, error => this.error = JSON.stringify(error), {
            sourceType : this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.NATIVE_URI,
            mediaType: this.camera.MediaType.ALLMEDIA
        });*/
    };
    ChallengePage.prototype.upload = function (vid) {
        var loader = this.loadingCtrl.create({
            content: "Loading...",
        });
        loader.present();
        var timestamp = new Date().getUTCMilliseconds();
        console.log(JSON.stringify(this.imgdata));
        var fileTransfer = this.transfer.create();
        var options = {
            fileKey: 'vid',
            mimeType: "multipart/form-data",
            chunkedMode: false,
            httpMethod: 'post',
        };
        fileTransfer.upload(this.imgdata, 'http://api.hemam.online/videosendersave?userid=' + vid, options)
            .then(function (data) {
            console.log('Done: ' + JSON.stringify(data));
            loader.dismiss();
        }, function (error) {
            // error
            alert("An error has occurred: Code = " + error.code);
            console.log("upload error source " + error.source);
            console.log("upload error target " + error.target);
            console.log(error.body);
            loader.dismiss();
        });
    };
    ChallengePage.prototype.onEvent = function (event, e) {
        if (e) {
            e.stopPropagation();
        }
        if (this.events[event]) {
            this.events[event](this.getItemData());
            this.resetValue();
        }
    };
    ChallengePage.prototype.getItemData = function () {
        return {
            'firstName': this.firstName,
            'lastName': this.lastName,
            'address1': this.address1,
            'address2': this.address2,
            'city': this.city,
            'zipCode': this.zipCode
        };
    };
    ChallengePage.prototype.resetValue = function () {
        this.firstName = "";
        this.task = "";
        this.lastName = "";
        this.address1 = "";
        this.address2 = "";
        this.city = "";
        this.zipCode = "";
    };
    ChallengePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-challenge',template:/*ion-inline-start:"/Users/macosx/Desktop/Ionic/hemmam_ionic_/src/pages/challenge/challenge.html"*/'<!--\n  Generated template for the ChallengePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>التحدي</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<!--  Theme Form - Form Write Address -->\n<ion-content>\n  <ion-grid *ngIf="data != null">\n    \n    <ion-row padding>\n            <!-- Full Name -->\n      <ion-col col-12 align-self-start>\n        <ion-item no-lines box-shadow margin-bottom>\n          <ion-input type="text" placeholder="عنوان" class="textt" [(ngModel)]="firstName"></ion-input>\n       </ion-item>      \n       <ion-item no-lines box-shadow margin-bottom>\n          <ion-label >اختر المهمة</ion-label>\n          <ion-select [(ngModel)]="task" [ngModelOptions]="{standalone: true}">\n              <ion-option value="{{list.id}}" *ngFor="let list of ressult">{{list.tasks}} </ion-option>\n          </ion-select>\n        </ion-item>\n        <p class="left">يرجى تحميل الفيديو تحت 30 ثانية</p>\n        <button ion-button outline block (click)="changephoto()">رفع فيديو</button>\n\n          <p text-center="">{{selected}}</p>\n     </ion-col>\n\n    \n      <!-- Button Write Comment -->\n      <ion-col col-12  align-self-end>\n      <button ion-button outline block (click)="uploadvideo()">\n          خضع\n        </button>\n      </ion-col>\n    </ion-row>\n  \n  </ion-grid>\n</ion-content>\n\n\n'/*ion-inline-end:"/Users/macosx/Desktop/Ionic/hemmam_ionic_/src/pages/challenge/challenge.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_11__ionic_native_media_capture__["a" /* MediaCapture */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_chooser__["a" /* Chooser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], ChallengePage);
    return ChallengePage;
}());

//# sourceMappingURL=challenge.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HistoryPage = /** @class */ (function () {
    function HistoryPage(menuCtrl, navCtrl, http, loadingCtrl, toastCtrl) {
        var _this = this;
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.data = {
            "items": [
                {
                    "groupName": "Pending",
                    "dateTime": "",
                    "items": [
                        {
                            "id": "1",
                            "name": "Adeline O'Reilly",
                            "task": "here is Task ",
                            "status": "Approde",
                            "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                            "shareIcon": "more",
                            "image": "assets/images/avatar/24.jpg",
                            "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe nderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu"
                        },
                        {
                            "id": 2,
                            "name": "Adeline O'Reilly",
                            "task": "here is Task ",
                            "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                            "shareIcon": "more",
                            "image": "assets/images/avatar/10.jpg",
                            "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe nderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu"
                        }
                    ]
                },
                {
                    "groupName": "Approved",
                    "dateTime": "June 26, 2018.",
                    "items": [
                        {
                            "id": 1,
                            "task": "here is Task ",
                            "name": "Reanna Langosh",
                            "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                            "shareIcon": "more",
                            "image": "assets/images/avatar/11.jpg",
                            "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe nderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu"
                        },
                        {
                            "id": 2,
                            "name": "Theresia Bechtelar",
                            "title": "Lorem ipsum dolor sit amet.",
                            "shareIcon": "more",
                            "image": "assets/images/avatar/12.jpg",
                            "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe nderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu"
                        }
                    ]
                },
                {
                    "groupName": "Disaproved",
                    "dateTime": "August 07, 2018.",
                    "items": [
                        {
                            "id": 1,
                            "name": "Jena Lesch",
                            "title": "Lorem ipsum dolor sit amet, consectetur.",
                            "shareIcon": "more",
                            "image": "assets/images/avatar/13.jpg",
                            "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe nderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu"
                        },
                        {
                            "id": 2,
                            "name": "Yesenia Beer",
                            "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
                            "shareIcon": "more",
                            "image": "assets/images/avatar/14.jpg",
                            "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe nderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu"
                        }
                    ]
                }
            ]
        };
        this.events = {
            'onItemClick': function (item) {
                console.log("onItemClick");
            },
            'onShare': function (item) {
                console.log("onShare");
            }
        };
        this.slider = {};
        this.userdata = JSON.parse(localStorage.getItem('user'));
        this.id = this.userdata.id;
        var fetch = {
            userid: this.id
        };
        var loader = this.loadingCtrl.create({
            content: "... ارجوك انتظر",
        });
        loader.present();
        this.http.get('http://api.hemam.online/history', { params: fetch }).map(function (res) { return res.json(); }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].create(error.json()); }).subscribe(function (fetchdata) {
            var fresult = fetchdata;
            _this.fetchdata = fetchdata;
            _this.videoinfo = fresult;
            console.log(_this.videoinfo);
            loader.dismiss();
            if (fresult == 0) {
                console.log('disabled');
            }
            else {
                console.log('sadsfsdfsdf');
            }
        }, function (err) {
            loader.dismiss();
            var toast = _this.toastCtrl.create({
                message: 'شيء ما خطأ. حاول مرة اخرى',
                duration: 4000
            });
            toast.present();
        });
    }
    HistoryPage.prototype.ngOnChanges = function (changes) {
        this.data = changes['data'].currentValue;
    };
    HistoryPage.prototype.onEvent = function (event, item, e) {
        if (e) {
            e.stopPropagation();
        }
        if (this.events[event]) {
            this.events[event](item);
        }
    };
    HistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-history',template:/*ion-inline-start:"/Users/macosx/Desktop/Ionic/hemmam_ionic_/src/pages/history/history.html"*/'<!--\n  Generated template for the HistoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>تاريخ الفيديو\n      </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  \n    <div *ngIf="data != null">\n        <ion-list >\n          <!--Text Header Top-->\n        \n          <!--Text Content List -->\n          <ion-card transparent no-margin *ngFor="let data of videoinfo" >\n            <div style="width:100%; ">              \n              <h2 style="float:right; margin: 10px;">{{data.task.tasks}}</h2>\n                <div>{{data.title}}</div>\n              <div item-content item-subtitle  class="status" *ngIf="data.status == 10">\n                    <!-- Pending --> قيد الانتظار\n              </div>\n              <div item-content item-subtitle class="status" *ngIf="data.status == 0">\n                  <!-- Disapprove --> رفض\n            </div>\n            <div item-content item-subtitle class="status" *ngIf="data.status == 1">\n                <!-- Approve -->يوافق\n          </div> \n            </div>\n           <br>\n            <ion-card-content>\n              <video controls="controls" class="videoPlayer" style="width: 100%;">\n                  <source src="{{data.video}}" type="video/mp4" />\n              </video>\n            </ion-card-content>\n            <hr style="    border: 0.02px solid skyblue;">\n          \n          </ion-card>\n\n        </ion-list>\n      </div>\n</ion-content>\n'/*ion-inline-end:"/Users/macosx/Desktop/Ionic/hemmam_ionic_/src/pages/history/history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], HistoryPage);
    return HistoryPage;
}());

//# sourceMappingURL=history.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SponsorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SponsorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SponsorPage = /** @class */ (function () {
    function SponsorPage() {
        this.data = {
            "items": [
                {
                    "id": 1,
                    "icon": "ios-arrow-dropright",
                    "iconText": "Watch now",
                    "title": "Lorem ipsum dolor sitamet",
                    "description": "Contrary to popular belief, Lorem Ipsum is not simply random text.",
                    "image": "assets/logo_partners.png",
                    "reviews": "4.12 (78 reviews)",
                    "ratingStar": {
                        "iconsStars": [
                            {
                                "isActive": true,
                                "iconActive": "icon-star",
                                "iconInactive": "icon-star-outline"
                            },
                            {
                                "isActive": true,
                                "iconActive": "icon-star",
                                "iconInactive": "icon-star-outline"
                            },
                            {
                                "isActive": true,
                                "iconActive": "icon-star",
                                "iconInactive": "icon-star-outline"
                            },
                            {
                                "isActive": true,
                                "iconActive": "icon-star",
                                "iconInactive": "icon-star-outline"
                            },
                            {
                                "isActive": false,
                                "iconActive": "icon-star",
                                "iconInactive": "icon-star-outline"
                            }
                        ],
                    }
                }
            ]
        };
        this.events = {
            'onItemClick': function (item) {
                console.log("onItemClick");
            },
            'onRates': function (index) {
            }
        };
        this.slider = {};
    }
    // slideHasChanged(slider, index): void {
    //     this.slider[index] = slider;
    //     if (2 == slider._activeIndex) {
    //         if (this.data.items) {
    //             this.data.items.splice(index, 1);
    //         } else {
    //             this.data.splice(index, 1);
    //         }
    //     }
    // }
    SponsorPage.prototype.onStarClass = function (items, index, e) {
        if (e) {
            e.stopPropagation();
        }
        for (var i = 0; i < items.length; i++) {
            items[i].isActive = i <= index;
        }
        this.onEvent("onRates", index, e);
    };
    ;
    SponsorPage.prototype.onClickEvent = function (index) {
        if (this.slider[index]) {
            this.slider[index].slidePrev(300);
        }
    };
    SponsorPage.prototype.onEvent = function (event, item, e) {
        if (e) {
            e.stopPropagation();
        }
        if (this.events[event]) {
            this.events[event](item);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */])
    ], SponsorPage.prototype, "content", void 0);
    SponsorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-sponsor',template:/*ion-inline-start:"/Users/macosx/Desktop/Ionic/hemmam_ionic_/src/pages/sponsor/sponsor.html"*/'<!--\n  Generated template for the SponsorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>كفيل</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  \n    <ion-grid no-padding>\n        <ion-row *ngIf="data != null">\n          <ion-col col-12 col-md-6 col-lg-3 *ngFor="let item of data.items;let i = index">\n            <ion-card text-left box-shadow margin-bottom>\n              <!--Card Image-->\n              <div card-image>\n                <img [src]="item.image" />\n              </div>\n              <!--Card descriptiom-->\n              <ion-card-content>\n                <ion-card-title text-center>\n                    <!-- Card Subtitle\n                    <h1 card-title>{{item.title}}</h1> -->\n                    <!-- Icon Rating Star -->\n                    <!-- <ion-icon *ngFor="let star of item.ratingStar.iconsStars; let i = index" (click)="onStarClass(item.ratingStar.iconsStars, i, $event)">\n                      <i icon-small *ngIf="star.isActive" class="icon {{star.iconActive}}"></i>\n                      <i icon-small *ngIf="!star.isActive" class="icon {{star.iconInactive}}"></i>\n                    </ion-icon> -->\n                    <!-- Reviews Star\n                    <span span-medium>{{item.reviews}}</span> -->\n                    <!--Card Body Text-->\n                    <br>\n                    <h2>\n                        يلتزم  (همم ) بحماية خصوصية الأفراد الذين يعملون ويتعاملون معها مباشرة أو من خلال موقعها الإلكتروني أو الخدمات التي تقدمها لكل من المتطوعين، الفرق التطوعية، الجهات الشركاء من القطاع الأهلي والعام والخاص، الداعمين والمانحين بجميع الفئات\n                    </h2>\n                        <br>\n<p margin-top card-body-text>\n                        (همم التطوعي بنك العمل ) برنامج وطني تحت مظلة شركة قنوات للتدريب والتنمية " شركة غيرربحية  يساهم في نشر العمل التطوعي وتعزيز مفهوم المواطنة الصالحة في المملكة بين أفراد المجتمع، من خلال تنظيم الجهود التطوعية بين المتطوعين والجهات المستفيدة ونشر وتطوير ثقافة العمل التطوعي وغرس مفهوم المبادرة والشعور بالمسؤولية.\n                      <br>\n                        <b>\n                        ويتشكل مجلس إدارة (همم) في دورته الاولى \n                      </b>\n                        <br>\n                        مجدي حمدان – رئيس مجلس الادارة\n                        <br>\n                         د.امجد الفرخ \n                        <br>\n                        د.فاطمة العقاربة \n                        <br>\n                        أ.ليلاس الدلقموني \n                        \n                    </p>\n                </ion-card-title>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/macosx/Desktop/Ionic/hemmam_ionic_/src/pages/sponsor/sponsor.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], SponsorPage);
    return SponsorPage;
}());

//# sourceMappingURL=sponsor.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FounderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the FounderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FounderPage = /** @class */ (function () {
    function FounderPage() {
        this.data = {
            "image1": "assets/1.png",
            "image2": "assets/2.png",
            "image3": "assets/3.png",
            "image4": "assets/4.png",
            "title": "Carolyn Guerrero",
            "subtitle": "Extreme coffee lover. Twitter maven. Internet practitioner. Beeraholic.",
            "category": "populary",
            "followers": "Followers",
            "valueFollowers": "439",
            "following": "Following",
            "valueFollowing": "297",
            "posts": "Posts",
            "valuePosts": "43",
            "items": [
                {
                    "id": 1,
                    "category": "Prisma Labs",
                    "title": "Prisma Photo Editor",
                    "like": {
                        "icon": "thumbs-up",
                        "text": "Like",
                        "isActive": true
                    },
                    "comment": {
                        "icon": "ios-chatbubbles",
                        "number": "4",
                        "text": "Comments",
                        "isActive": false
                    }
                },
                {
                    "id": 2,
                    "category": "Apple watch",
                    "title": "Built with your heart in mind",
                    "like": {
                        "icon": "thumbs-up",
                        "text": "Like",
                        "isActive": true
                    },
                    "comment": {
                        "icon": "ios-chatbubbles",
                        "number": "4",
                        "text": "Comments",
                        "isActive": false
                    }
                },
                {
                    "id": 3,
                    "category": "Interior design trends",
                    "title": "Work It Baby: 14 Interior Design",
                    "like": {
                        "icon": "thumbs-up",
                        "text": "Like",
                        "isActive": true
                    },
                    "comment": {
                        "icon": "ios-chatbubbles",
                        "number": "4",
                        "text": "Comments",
                        "isActive": false
                    }
                }
            ]
        };
    }
    FounderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-founder',template:/*ion-inline-start:"/Users/macosx/Desktop/Ionic/hemmam_ionic_/src/pages/founder/founder.html"*/'<!--\n  Generated template for the FounderPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title> مجلس الادارة و مؤسس</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  \n    <ion-grid *ngIf="data != null">\n        <ion-row>\n          <ion-col col-12 align-self-start>\n            <ion-card profile padding text-center box-shadow>\n              <ion-avatar>\n                <img [src]="data.image1" alt="">\n              </ion-avatar>\n              <ion-card-content text-center>\n                <h1 ion-text color="secondary">أمجد محمد الفرخ</h1>\n                <p ion-text color="secondary">\n                    الدكتوراة في التنمية البشرية وتطوير الذات  \n                    -تخرج من جامعة الزرقاء الخاصة تخصص أصول الدين ثم القضاء الشرعي  .\n                    - شريك سابق في شركة لتطوير برامج التعليم \n                    -مدرب باحث في الطاقة الإيجابية. \n                    - مدرب معتمد في Leadership and Coaching Skills. \n                    -ممارس معتمد في الابتكار. المؤسسي Cllp. \n                    -مدرب و معالج  في مجال العلاج بالطاقة. \n                    -مدرب و معالج في Time Line Therapy.\n                    </p>\n              </ion-card-content>              \n            </ion-card>\n          </ion-col> \n          \n          <ion-col col-12 align-self-start>\n              <ion-card profile padding text-center box-shadow>\n                <ion-avatar>\n                  <img [src]="data.image2" alt="">\n                </ion-avatar>\n                <ion-card-content text-center>\n                  <h1 ion-text color="secondary">فاطمة العقاربة </h1>\n                  <p ion-text color="secondary">\n                      دكتوراه بالعلوم الإنسانية والسلام\n                      ماجستير إدارة دولية وديبلوماسية من جامعة كارلن باميركا\n                      ماجستير موارد بشرية وإدارة تطويرية من جامعة كارلن \n                      ديبلوم عالي من جامعة ماونتن بامريكا\n                      بكالوريوس علم اجتماع وعمل اجتماعي من الجامعة الاردنية\n                      مندوبة الاردن وعضو رسمي بمعهد القيادات النسائية العربية بوزارة الخارجية الأمريكية \n                      مديرة العلاقات الدولية بجامعة العقبة للتكنولوجيا \n                      حاصلة على جايزة التحدي للقيادات بالتنمية والتطوير على مستوى الوطن العربي \n                      حاصلة على جايزة تقدير عمدة تكساس باميركا في العمل المهني والأخلاقي الدولي \n                      تم تكريمي بشهادة المواطنة الأمريكية بولاية تكساس للبحث العملي \n                      \n                      مديرة التخطيط الاستراتيجي لمشروع التصدي لخطاب الكراهية عبر الإنترنت \n                      مدربة معتمدة مع منظمات دولية بالبرامج التنموية والتطوير الإداري والتخطيط الاستراتيجي وتمكين وتمتين المرأة\n                      \n                      </p>\n                </ion-card-content>              \n              </ion-card>\n            </ion-col> \n\n            <ion-col col-12 align-self-start>\n                <ion-card profile padding text-center box-shadow>\n                  <ion-avatar>\n                    <img [src]="data.image3" alt="">\n                  </ion-avatar>\n                  <ion-card-content text-center>\n                    <h1 ion-text color="secondary">ليلاس نصير الدلقموني</h1>\n                    <p ion-text color="secondary"> \n                        مدير مؤسسة قنوات للتدريب والتنمية \n                        عضو مجلس بلدي \n                        </p>\n                  </ion-card-content>              \n                </ion-card>\n              </ion-col> \n\n            <ion-col col-12 align-self-start>\n            <ion-card profile padding text-center box-shadow>\n              <ion-avatar>\n                <img [src]="data.image4" alt="">\n              </ion-avatar>\n              <ion-card-content text-center>\n                <h1 ion-text color="secondary">مجدي محمد حمدان </h1>\n                <h2 ion-text color="secondary">مؤسس همم بنك العمل التطوعي ورئيس مجلس الادارة</h2>\n                <p ion-text color="secondary">\n                    مرشح للدكتوراة سنة اولى universiti tenaga nasional \n                    ماجستير علم اجتماع - الجامعة الاردنية رسالة بعنوان مظاهر العنف لدى طلبة الصف العاشر في المدارس الحكومية في مدينة عمان : دراسة ميدانية /2007\n                    بكالوريس عمل اجتماعي – جامعة البلقاء التطبيقية2004\n                    مؤسس مركز  الهندسة البشرية للتدريب والتطوير \n                    مستشار تدريب وتطوير الذات بعدة مؤسسات محلية ودولية \n                    كاتب مقالات تنموية واجتماعية بعدة مواقع الكترونية \n                    </p>\n              </ion-card-content>              \n            </ion-card>\n          </ion-col> \n        </ion-row>\n      </ion-grid>\n    \n      \n</ion-content>\n'/*ion-inline-end:"/Users/macosx/Desktop/Ionic/hemmam_ionic_/src/pages/founder/founder.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], FounderPage);
    return FounderPage;
}());

//# sourceMappingURL=founder.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LibraryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the LibraryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LibraryPage = /** @class */ (function () {
    function LibraryPage() {
        this.data = {
            "image1": "assets/1.png",
            "image2": "assets/2.png",
            "image3": "assets/3.png",
            "image4": "assets/4.png",
            "video1": "assets/lab/1.mp4",
            "video2": "assets/lab/2.mp4",
            "title": "Carolyn Guerrero",
            "subtitle": "Extreme coffee lover. Twitter maven. Internet practitioner. Beeraholic.",
            "category": "populary",
            "followers": "Followers",
            "valueFollowers": "439",
            "following": "Following",
            "valueFollowing": "297",
            "posts": "Posts",
            "valuePosts": "43",
            "items": [
                {
                    "id": 1,
                    "category": "Prisma Labs",
                    "title": "Prisma Photo Editor",
                    "like": {
                        "icon": "thumbs-up",
                        "text": "Like",
                        "isActive": true
                    },
                    "comment": {
                        "icon": "ios-chatbubbles",
                        "number": "4",
                        "text": "Comments",
                        "isActive": false
                    }
                },
                {
                    "id": 2,
                    "category": "Apple watch",
                    "title": "Built with your heart in mind",
                    "like": {
                        "icon": "thumbs-up",
                        "text": "Like",
                        "isActive": true
                    },
                    "comment": {
                        "icon": "ios-chatbubbles",
                        "number": "4",
                        "text": "Comments",
                        "isActive": false
                    }
                },
                {
                    "id": 3,
                    "category": "Interior design trends",
                    "title": "Work It Baby: 14 Interior Design",
                    "like": {
                        "icon": "thumbs-up",
                        "text": "Like",
                        "isActive": true
                    },
                    "comment": {
                        "icon": "ios-chatbubbles",
                        "number": "4",
                        "text": "Comments",
                        "isActive": false
                    }
                }
            ]
        };
    }
    LibraryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-library',template:/*ion-inline-start:"/Users/macosx/Desktop/Ionic/hemmam_ionic_/src/pages/library/library.html"*/'<!--\n  Generated template for the LibraryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>مكتبة</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-grid *ngIf="data != null">\n        <ion-row>\n          <ion-col col-12 align-self-start>\n            <ion-card profile padding text-center box-shadow>          \n              <ion-card-content text-center>   \n                <h1>    \n                  تعليمات التصوير وقبول الفيديو لدى تطبيق همم \n                </h1>       \n                <p ion-text color="secondary" align="right" >                    \n                    احرص على عدم تصوير لوجوه الاشخاص سواء كانوا متطوعين او مستحقين - <br>\n                    احرص على عدم تصوير قد يسبب احراج او جرح لكرامة المستحق - <br>\n                    الهدف من التصوير هو للتوثيق وليس للتباهي بتنفيذ تلك المهمة  - <br>\n                    تذكر مدة الفيديو لكل مهمة لا تقل عن 25 ثانية ولا تزيد عن 30 ثانية  - <br>\n                    \n                    باخر كل فيديو  ذكر بصوت واضح اسمك وعبارة  همم بنك العمل التطوعي  - <br>\n                    <b>\n                    نصائح للتصوير  <br>\n                  </b>\n                  <b>\n                    تسجيل الفيديو في الاتجاه الأفقي - <br>\n                     تسجيل فيديو باستقرار وانسيابية -  <br>\n                    </b>\n                     استخدام كلا اليدين في التصوير -  <br>\n                     <b>\n                     تسجيل فيديو بالإعدادات الكلاسيكية في التصوير     <br>\n                    استخدام الضوء على الوجه الأمثل في التصوير        <br>\n\n                  </b>\n\n                     يمكن للمستخدم تحقيق الاستفادة من الإضاءة الطبيعية في تصوير محتوى الفيديو وذلك من خلال اختيار موقع للتصوير تكون فيه الإضاءة متساوية مع المشهد المراد تسجيله.\n                     <br>\n                    يمكن أيضا تغير موقع موضوع التصوير في الإضاءة الطبيعية للشمس حتى يتم تحديد الموقع الذي لا تظهر فيه الإضاءة ساطعة بشكل يخفي المشهد، أو مظلمة لتحجب موضوع التصوير.\n                    <b>\n                    تسجيل صوتيات بأعلى جودة عند تسجيل الفيديو  <br>\n                    \n                     تعرف على قدرات هاتفك قبل بدء تسجيل الفيديو  <br>\n                    </b>\n                    التاكد من البطارية والذاكرة لحفظ الفيديو واختيار الموقع المناسب لتصوير الفيديو\n                   \n                    يجب وضع مربع بكل فيديو يرفع <br>\n                    اسمح لتطبيق همم استخدام هذا الفيديو لدى مواقع التواصل الاجتماعي لتعزيز ثقافة العمل التطوعي <br>\n                    اشارة صح للموافقة <br>\n                    مو شرط يوافق <br>\n                    \n\n                </p>\n              </ion-card-content>              \n            </ion-card>\n          </ion-col> \n          \n          <ion-col col-12 align-self-start>\n              <ion-card profile padding text-center box-shadow>              \n                \n                  <h1 ion-text color="secondary" right>فاطمة العقاربة </h1>\n                  <video controls="controls" class="videoPlayer" style="width: 100%;">\n                      <source src="{{data.video1}}" type="video/mp4" />\n                  </video>\n                  <h1 ion-text color="secondary" right>فاطمة العقاربة </h1>\n                  <video controls="controls" class="videoPlayer" style="width: 100%;">\n                      <source src="{{data.video2}}" type="video/mp4" />\n                  </video>\n                            \n              </ion-card>\n            </ion-col> \n\n        </ion-row>\n      </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/macosx/Desktop/Ionic/hemmam_ionic_/src/pages/library/library.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], LibraryPage);
    return LibraryPage;
}());

//# sourceMappingURL=library.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartnerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the PartnerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PartnerPage = /** @class */ (function () {
    function PartnerPage() {
        this.data = {
            "image": "assets/partner/logo_partners.png",
            "image1": "assets/partner/1.png",
            "image2": "assets/partner/2.png",
            "image3": "assets/partner/3.png",
            "image4": "assets/partner/4.png",
            "image5": "assets/partner/5.png",
            "image6": "assets/partner/6.png",
            "image7": "assets/partner/7.png",
            "image8": "assets/partner/8.png",
            "image9": "assets/partner/9.png",
            "image10": "assets/partner/10.png",
            "image11": "assets/partner/11.png",
            "image12": "assets/partner/12.png",
            "image13": "assets/partner/13.png",
            "image14": "assets/partner/14.png",
            "image15": "assets/partner/15.png",
            "image16": "assets/partner/16.png",
            "image17": "assets/partner/17.png",
            "image18": "assets/partner/18.png",
            "image19": "assets/partner/19.png",
            "image20": "assets/partner/20.png",
            "image21": "assets/partner/21.png",
            "image22": "assets/partner/22.png",
            "image23": "assets/partner/23.png",
            "image24": "assets/partner/24.png",
            "image25": "assets/partner/25.png",
            "image26": "assets/partner/26.png",
            "title": "Carolyn Guerrero",
            "subtitle": "Extreme coffee lover. Twitter maven. Internet practitioner. Beeraholic.",
            "category": "populary",
            "followers": "Followers",
            "valueFollowers": "439",
            "following": "Following",
            "valueFollowing": "297",
            "posts": "Posts",
            "valuePosts": "43",
            "items": [
                {
                    "id": 1,
                    "category": "Prisma Labs",
                    "title": "Prisma Photo Editor",
                    "like": {
                        "icon": "thumbs-up",
                        "text": "Like",
                        "isActive": true
                    },
                    "comment": {
                        "icon": "ios-chatbubbles",
                        "number": "4",
                        "text": "Comments",
                        "isActive": false
                    }
                },
                {
                    "id": 2,
                    "category": "Apple watch",
                    "title": "Built with your heart in mind",
                    "like": {
                        "icon": "thumbs-up",
                        "text": "Like",
                        "isActive": true
                    },
                    "comment": {
                        "icon": "ios-chatbubbles",
                        "number": "4",
                        "text": "Comments",
                        "isActive": false
                    }
                },
                {
                    "id": 3,
                    "category": "Interior design trends",
                    "title": "Work It Baby: 14 Interior Design",
                    "like": {
                        "icon": "thumbs-up",
                        "text": "Like",
                        "isActive": true
                    },
                    "comment": {
                        "icon": "ios-chatbubbles",
                        "number": "4",
                        "text": "Comments",
                        "isActive": false
                    }
                }
            ]
        };
    }
    PartnerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-partner',template:/*ion-inline-start:"/Users/macosx/Desktop/Ionic/hemmam_ionic_/src/pages/partner/partner.html"*/'<!--\n  Generated template for the PartnerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>شريك</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  \n  <ion-grid *ngIf="data != null">\n    <ion-row>\n        <div card-image>\n            <img [src]="data.image" />\n          </div>\n          <br><br>\n      <ion-col col-12 align-self-start>\n        <ion-card profile padding text-center box-shadow>\n          <ion-avatar>\n            <img [src]="data.image1" alt="">\n          </ion-avatar>\n          <ion-card-content text-center>\n            <h1 ion-text color="secondary"> جمعية رعاية الطفل الخيرية " المفرق " </h1>\n            <p ion-text color="secondary">\n                تقديم الخدمات الاجتماعية للفئات المستهدفة من ايتام وذوي اعاقة وكافة الفئات المستهدفة من المجتمع المحلي من خلال برامج متنوعة ، ورفع وبناء القدرات من خلال التأهيل والتدريب وتكوين الشراكات الفاعلة\n            </p>\n          </ion-card-content>              \n        </ion-card>\n      </ion-col> \n      \n      <ion-col col-12 align-self-start>\n          <ion-card profile padding text-center box-shadow>\n            <ion-avatar>\n              <img [src]="data.image2" alt="">\n            </ion-avatar>\n            <ion-card-content text-center>\n              <h1 ion-text color="secondary"> جمعية سهول  المفرق لرعاية الايتأم </h1>\n              <p ion-text color="secondary">\n                  خدمة المجتمع المحلي والعمل على التنمية الاجتماعية والتمكين الاقتصادي ، وادارة المشاريع المدرة للدخل\n                  </p>\n            </ion-card-content>              \n          </ion-card>\n        </ion-col> \n\n        <ion-col col-12 align-self-start>\n            <ion-card profile padding text-center box-shadow>\n              <ion-avatar>\n                <img [src]="data.image3" alt="">\n              </ion-avatar>\n              <ion-card-content text-center>\n                <h1 ion-text color="secondary"> مبادرون معان للتنمية والتدريب </h1>\n                <p ion-text color="secondary"> \n                    فريق مخضرم من نشطاء محافظة معان هدفهم التنمية والتمكين في شتى المجالات عن طريق تدريب وتاهيل المورد البشري ومن ثم التشبيك مع مؤسسات المجتمع المدني من دمج لذوي الاعاقة في جميع البرامج والأنشطة    \n                </p>\n              </ion-card-content>              \n            </ion-card>\n          </ion-col> \n\n          <ion-col col-12 align-self-start>\n              <ion-card profile padding text-center box-shadow>\n                \n                <ion-card-content text-center>\n                  <h1 ion-text color="secondary"> التواصل لتنمية الأسرة والطفولة المبكرة\n                      " المفرق "\n                       </h1>                 \n                  <p ion-text color="secondary">\n                     \n                      تختص الجمعية بالعمل الخيري والتطوعي تعتبره رافدا اساسيا من روافد تنمية الفرد والمجتمع وتسعى الى تلبية حاجاته الأساسية العاجلة والمستمرة والوصول اليه اينما كان\n                  \n                   </p>\n                </ion-card-content>              \n              </ion-card>\n            </ion-col> \n\n        <ion-col col-12 align-self-start>\n        <ion-card profile padding text-center box-shadow>\n          <ion-avatar>\n            <img [src]="data.image4" alt="">\n          </ion-avatar>\n          <ion-card-content text-center>\n            <h1 ion-text color="secondary"> مركز جابر العثرات\n                " السلط "\n                 </h1>\n            <p ion-text color="secondary">\n                	تقديم خدمات العلاج الطبيعي والوظيفي للأفراد الملتحقين في المركز والمجتمع المحلي •\n<br>\n\n  الثقافي في المجتمع حول الاعاقة العقلية والتركيز على البرامج الوقائية بالتعاون مع الجهات ذات علاقة •\n  <br>\n  تغير وجهة نظر المجتمع نحو الافراد  ذوي الاحتياجات الخاصة •\n<br>\n        الارشاد الاسري الفردي والجماعي لأسر المعاقين عقليا بهدف توعيتهم وإرشادهم\n  \n                </p>\n          </ion-card-content>              \n        </ion-card>\n      </ion-col> \n\n      <ion-col col-12 align-self-start>\n          <ion-card profile padding text-center box-shadow>\n            <ion-avatar>\n              <img [src]="data.image5" alt="">\n            </ion-avatar>\n            <ion-card-content text-center>\n              <h1 ion-text color="secondary"> الجمعية الأردنية للتنمية البشرية\n\n                  " جرش "\n                   </h1>\n              <p ion-text color="secondary"> \n                  تسعى الى المساهمة الحقيقية في تنمية قدرات فئات المجتمع وتعزيز مشاركتهم في الحياة العامة والاجتماعية ليصبحوا عنصرا فعالا في تنمية المجتمع \n                  </p>\n            </ion-card-content>              \n          </ion-card>\n        </ion-col> \n        <ion-col col-12 align-self-start>\n            <ion-card profile padding text-center box-shadow>\n              <ion-avatar>\n                <img [src]="data.image6" alt="">\n              </ion-avatar>\n              <ion-card-content text-center>\n                <h1 ion-text color="secondary"> جمعية سوف للتنمية الاجتماعية\n                    " جرش "\n                     </h1>\n                <p ion-text color="secondary"> \n                    تسعى الى تنمية المجتمعات المحلية وتمكين المرأة وحمايتها وتنفيذ المشاريع الانتاجية\n                    </p>\n              </ion-card-content>              \n            </ion-card>\n          </ion-col>\n          <ion-col col-12 align-self-start>\n              <ion-card profile padding text-center box-shadow>\n                <ion-avatar>\n                  <img [src]="data.image7" alt="">\n                </ion-avatar>\n                <ion-card-content text-center>\n                  <h1 ion-text color="secondary"> جمعية خولة بنت الأزور لتمكين المرأة\n                      " الزرقاء "\n                       </h1>\n                  <p ion-text color="secondary"> \n                      تمكين الأفراد محليا في قضايا التنمية من خلال تقديم برامج تنموية تسعى الى تحسين ورفع مستوى الأسرة وتطوير قدراتهم الاقتصادية والمهنية \n                      </p>\n                </ion-card-content>              \n              </ion-card>\n            </ion-col>\n            \n            <ion-col col-12 align-self-start>\n                <ion-card profile padding text-center box-shadow>\n                  <ion-avatar>\n                    <img [src]="data.image8" alt="">\n                  </ion-avatar>\n                  <ion-card-content text-center>\n                    <h1 ion-text color="secondary"> جمعية الشمال للتنمية المستدامة " اربد  " </h1>\n                    <p ion-text color="secondary"> \n                      \n                        تمكين النساء والفتيات والتركيز على التنمية المستدامة\n                        </p>\n                  </ion-card-content>              \n                </ion-card>\n              </ion-col>\n\n              <ion-col col-12 align-self-start>\n                  <ion-card profile padding text-center box-shadow>\n                    <ion-avatar>\n                      <img [src]="data.image9" alt="">\n                    </ion-avatar>\n                    <ion-card-content text-center>\n                      <h1 ion-text color="secondary">جمعية مستقبل ابنائنا الثقافية " معان "</h1>\n                      <p ion-text color="secondary">\n                        \n                          تهدف لعمل مبادرات ونشاطات ثقافية لجميع الفئات العمرية بهدف تطوير مهاراتهم\n                          </p>\n                    </ion-card-content>              \n                  </ion-card>\n                </ion-col>\n\n                <ion-col col-12 align-self-start>\n                    <ion-card profile padding text-center box-shadow>\n                      <ion-avatar>\n                        <img [src]="data.image10" alt="">\n                      </ion-avatar>\n                      <ion-card-content text-center>\n                        <h1 ion-text color="secondary"> جمعية النور المبين للتنمية الاجتماعية " جرش " </h1>\n                        <p ion-text color="secondary"> \n                            المساهمة الى انجاز كل ما من شأنه المساهمة في تحقيق التنمية بالمنطقة في جميع المجالات من خلال المشاريع التنموية\n                            </p>\n                      </ion-card-content>              \n                    </ion-card>\n                  </ion-col><ion-col col-12 align-self-start>\n                      <ion-card profile padding text-center box-shadow>\n                        <ion-avatar>\n                          <img [src]="data.image11" alt="">\n                        </ion-avatar>\n                        <ion-card-content text-center>\n                          <h1 ion-text color="secondary">جمعية شابات الوطن الخيرية\n                              " عجلون"\n                              </h1>\n                          <p ion-text color="secondary"> \n                            \n                              جمعية  تقدم المساعدات المادية والعينية و تساهم في ادارة مشاريع مدرة للدخل\n                              </p>\n                        </ion-card-content>              \n                      </ion-card>\n                    </ion-col><ion-col col-12 align-self-start>\n                        <ion-card profile padding text-center box-shadow>\n                          <ion-avatar>\n                            <img [src]="data.image12" alt="">\n                          </ion-avatar>\n                          <ion-card-content text-center>\n                            <h1 ion-text color="secondary">جمعية الأصايل للابداع والفن التشكيلي\n                                " المفرق "\n                                </h1>\n                            <p ion-text color="secondary"> \n                                تمكين الشباب والمرأة\n                                </p>\n                          </ion-card-content>              \n                        </ion-card>\n                      </ion-col><ion-col col-12 align-self-start>\n                          <ion-card profile padding text-center box-shadow>\n                            <ion-avatar>\n                              <img [src]="data.image13" alt="">\n                            </ion-avatar>\n                            <ion-card-content text-center>\n                              <h1 ion-text color="secondary">منتدى العقبة للابداع الثقافي والشبابي</h1>\n                              <p ion-text color="secondary"> \n                                  تسعى الى التغيير الايجابي وخلق المبادرات والبرامج النوعية ليكون مظلة للمبدعين والشباب الاردني\n                                  </p>\n                            </ion-card-content>              \n                          </ion-card>\n                        </ion-col><ion-col col-12 align-self-start>\n                            <ion-card profile padding text-center box-shadow>\n                              <ion-avatar>\n                                <img [src]="data.image14" alt="">\n                              </ion-avatar>\n                              <ion-card-content text-center>\n                                <h1 ion-text color="secondary">مركز شباب الغد لتنمية المجتمع المحلي\n                                    " العقبة "\n                                    </h1>\n                                <p ion-text color="secondary"> \n                                    المشاركة في تنمية قدرات الشباب الاجتماعية في الاردن وخاصة المناطق والفئات المهمشة ضمن المعايير الدولية لنشر الوعي على اساس المساواة والعدل وسيادة القانون\n                                    </p>\n                              </ion-card-content>              \n                            </ion-card>\n                          </ion-col><ion-col col-12 align-self-start>\n                              <ion-card profile padding text-center box-shadow>\n                                <ion-avatar>\n                                  <img [src]="data.image15" alt="">\n                                </ion-avatar>\n                                <ion-card-content text-center>\n                                  <h1 ion-text color="secondary">جمعية أم اللولو التعاونية\n                                      " عجلون "\n                                      </h1>\n                                  <p ion-text color="secondary"> \n                                      تنمية المجتمع والتوعية والتدريب وتقديم القروض الدوارة وتمكين المرأة اقتصاديا واجتماعيا\n                                   </p>\n                             </ion-card-content>              \n                           </ion-card>\n                         </ion-col><ion-col col-12 align-self-start>\n                             <ion-card profile padding text-center box-shadow>\n                               <ion-avatar>\n                                 <img [src]="data.image16" alt="">\n                               </ion-avatar>\n                               <ion-card-content text-center>\n                                 <h1 ion-text color="secondary">جمعية المستقبل للتعليم والتنمية الخيرية\n                                    " معان "\n                                    </h1>\n                                 <p ion-text color="secondary"> \n                                   \nتهتم بمساعدة طلبة العلم وتهيئة فرص النجاح لهم في جميع مراحل التعليم وتاهيل قيادات مجتمعية منتجة\n\n                                     </p>\n                               </ion-card-content>              \n                             </ion-card>\n                           </ion-col><ion-col col-12 align-self-start>\n                               <ion-card profile padding text-center box-shadow>\n                                 <ion-avatar>\n                                   <img [src]="data.image17" alt="">\n                                 </ion-avatar>\n                                 <ion-card-content text-center>\n                                   <h1 ion-text color="secondary">جمعية الشباب للتنمية الذاتية –" الزرقاء "</h1>\n                                   <p ion-text color="secondary"> \n                                      اقامة مشاريع انتاجية تهدف الى المساهمة في الحد من البطالة من خلال التدريب ورفع كفاءة الشباب لتهيئتهم لسوق العمل وتعزيز قيم العمل الاجتماعي والتطوعي\n                                       </p>\n                                 </ion-card-content>              \n                               </ion-card>\n                             </ion-col><ion-col col-12 align-self-start>\n                                 <ion-card profile padding text-center box-shadow>\n                                   <ion-avatar>\n                                     <img [src]="data.image18" alt="">\n                                   </ion-avatar>\n                                   <ion-card-content text-center>\n                                     <h1 ion-text color="secondary">جمعية الهمة والابداع للفنون " الزرقاء "</h1>\n                                     <p ion-text color="secondary"> \n                                        تمكين قادة الغد من الحرف والفنون الابداعية ضمن خطط ومناهج متطورة لمواكبة حاجات العصر\n                                         </p>\n                                   </ion-card-content>              \n                                 </ion-card>\n                               </ion-col><ion-col col-12 align-self-start>\n                                   <ion-card profile padding text-center box-shadow>\n                                     <ion-avatar>\n                                       <img [src]="data.image19" alt="">\n                                     </ion-avatar>\n                                     <ion-card-content text-center>\n                                       <h1 ion-text color="secondary">جمعية تحفيز للريادة والتطوير " اربد "</h1>\n                                       <p ion-text color="secondary"> \n                                          تطوير وبناء قدرات المجتمع المحلي وتحقيق تنمية مجتمعية مستدامة وخلق فرص تطوعية للشباب بطرق ابداعية ومبتكرة\n                                           </p>\n                                     </ion-card-content>              \n                                   </ion-card>\n                                 </ion-col><ion-col col-12 align-self-start>\n                                     <ion-card profile padding text-center box-shadow>\n                                       <ion-avatar>\n                                         <img [src]="data.image20" alt="">\n                                       </ion-avatar>\n                                       <ion-card-content text-center>\n                                         <h1 ion-text color="secondary">مركز مساواة لتنمية المجتمع المدني\n                                            " المفرق "\n                                            </h1>\n                                         <p ion-text color="secondary"> \n                                           \n                                          إقامة المهرجانات الثقافية والتوعوية والدورات التدريبية الثقافية.\n                                          <br>\n                                            إقامة المشاريع لزيادة الوعي في مجال حقوق المرأة والطفل والشباب والمساواة بين الجنسين.\n                                            \n                                             </p>\n                                       </ion-card-content>              \n                                     </ion-card>\n                                   </ion-col><ion-col col-12 align-self-start>\n                                       <ion-card profile padding text-center box-shadow>\n                                         <ion-avatar>\n                                           <img [src]="data.image21" alt="">\n                                         </ion-avatar>\n                                         <ion-card-content text-center>\n                                           <h1 ion-text color="secondary">جمعية رؤيا الخيرية\n                                              " العقبة "\n                                              </h1>\n                                           <p ion-text color="secondary"> \n                                              حماية المجتمع من العنف الأسري من خلال رفع الوعي الثقافي، والاجتماعي لشرائح المجتمع التي تساعد أيضاً في الحد من ظاهرة العنف الأسري.وتقيم المساعدات العينية والنقدية للسجناء، وضحايا العنف الأسري، وكافة المواطنين.\n                                               </p>\n                                         </ion-card-content>              \n                                       </ion-card>\n                                     </ion-col>\n\n                                     <ion-col col-12 align-self-start>\n                                        <ion-card profile padding text-center box-shadow>\n                                          <ion-avatar>\n                                            <img [src]="data.image22" alt="">\n                                          </ion-avatar>\n                                          <ion-card-content text-center>\n                                            <h1 ion-text color="secondary">مركز نماء للتنمية وبناء القدرات\n                                                " السلط "\n                                                </h1>\n                                            <p ion-text color="secondary"> \n                                                نسعى لمجتمع قوي محصن ضد التطرف والاهاب وضمن سيادة مبادئ حقوق الانسان ، وبناء القدرات لهم وتعزيز التنمية المجتمعية المستدامة.\n                                                </p>\n                                          </ion-card-content>              \n                                        </ion-card>\n                                      </ion-col>\n\n                                      <ion-col col-12 align-self-start>\n                                          <ion-card profile padding text-center box-shadow>\n                                            <ion-avatar>\n                                              <img [src]="data.image23" alt="">\n                                            </ion-avatar>\n                                            <ion-card-content text-center>\n                                              <h1 ion-text color="secondary">جمعية شقيرا للتنمية الاجتماعية\n                                                  " الكرك "\n                                              </h1>\n                                              <p ion-text color="secondary">\n                                                  تنمية المجتمع المحلي.\n                                                  و فتح مشاريع تنموية.\n                                                  و مساعدة ذوي الإحتيجات الخاصة.\n                                                 و تدريب وتطوير الشباب.\n                                                 \n                                                  </p>\n                                            </ion-card-content>              \n                                          </ion-card>\n                                        </ion-col><ion-col col-12 align-self-start>\n                                            <ion-card profile padding text-center box-shadow>\n                                              <ion-avatar>\n                                                <img [src]="data.image24" alt="">\n                                              </ion-avatar>\n                                              <ion-card-content text-center>\n                                                <h1 ion-text color="secondary">جمعية عي لذوي الاحتياجات الخاصة الخيرية\n                                                    " الكرك "\n                                                    </h1>\n                                                <p ion-text color="secondary"> \n                                                    تقديم الخدمات المادية و الانسانية والصحية والتنموية الى الاشخاص ذوي الاعاقة\n                                                    </p>\n                                              </ion-card-content>              \n                                            </ion-card>\n                                          </ion-col><ion-col col-12 align-self-start>\n                                              <ion-card profile padding text-center box-shadow>\n                                                <ion-avatar>\n                                                  <img [src]="data.image25" alt="">\n                                                </ion-avatar>\n                                                <ion-card-content text-center>\n                                                  <h1 ion-text color="secondary">مركز وسطاء التغيير للتنمية المستدامة\n                                                      " عجلون "\n                                                      </h1>\n                                                  <p ion-text color="secondary"> \n                                                      تعزيز دور المجتمعات وخصوصا الشباب والمرأة كوسطاء في إحداث التغيير في كافة المجالات الاقتصادية والاجتماعية و الثقافية ‏واستثمار طاقاتهم وقدراتهم في تحقيق أهداف التنمية المستدامة\n                                                      </p>\n                                                </ion-card-content>              \n                                              </ion-card>\n                                            </ion-col>\n                                            <ion-col col-12 align-self-start>\n                                                <ion-card profile padding text-center box-shadow>\n                                                  <ion-avatar>\n                                                    <img [src]="data.image26" alt="">\n                                                  </ion-avatar>\n                                                  <ion-card-content text-center>\n                                                    <h1 ion-text color="secondary">مركز افاق\n                                                        الريادة للتنمية والتدريب\n                                                        " المفرق "\n                                                        </h1>\n                                                    <p ion-text color="secondary"> \n                                                        يعمل على زيادة الوعي في مجال حقوق المرأة وتمكين الشباب والمساواة بين الجنسين وتعزيز مفهوم الديمقراطية والحاكمية الرشيدة ونشر ثقافة الحوار والسلام وتقبل الآخر، بالإضافة إلى تعزيز دور مؤسسات المجتمع المدني .\n                                                        </p>\n                                                  </ion-card-content>              \n                                                </ion-card>\n                                              </ion-col>\n                                              <ion-col col-12 align-self-start>\n                                                  <ion-card profile padding text-center box-shadow>\n                                                    \n                                                    <ion-card-content text-center>\n                                                      <h1 ion-text color="secondary">\n                                                        \n                                              جمعية سيدات قريفلا الخيرية " الكرك "  \n                                                      </h1>\n                                                    </ion-card-content>              \n                                                  </ion-card>\n                                                </ion-col>\n                                             \n                                               \n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/macosx/Desktop/Ionic/hemmam_ionic_/src/pages/partner/partner.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], PartnerPage);
    return PartnerPage;
}());

//# sourceMappingURL=partner.js.map

/***/ }),

/***/ 191:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 191;

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/certificate/certificate.module": [
		447,
		8
	],
	"../pages/challenge/challenge.module": [
		448,
		7
	],
	"../pages/dashboard/dashboard.module": [
		450,
		6
	],
	"../pages/founder/founder.module": [
		449,
		5
	],
	"../pages/history/history.module": [
		451,
		4
	],
	"../pages/library/library.module": [
		452,
		3
	],
	"../pages/partner/partner.module": [
		454,
		2
	],
	"../pages/sponsor/sponsor.module": [
		453,
		1
	],
	"../pages/videos/videos.module": [
		455,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 233;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(394);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_dashboard_dashboard__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_challenge_challenge__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_library_library__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_founder_founder__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_history_history__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_certificate_certificate__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_partner_partner__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_sponsor_sponsor__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_file_transfer__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_file__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_camera__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_chooser__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_media_capture__ = __webpack_require__(236);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_challenge_challenge__["a" /* ChallengePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_library_library__["a" /* LibraryPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_history_history__["a" /* HistoryPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_founder_founder__["a" /* FounderPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_certificate_certificate__["a" /* CertificatePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_partner_partner__["a" /* PartnerPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_sponsor_sponsor__["a" /* SponsorPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/certificate/certificate.module#CertificatePageModule', name: 'CertificatePage', segment: 'certificate', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/challenge/challenge.module#ChallengePageModule', name: 'ChallengePage', segment: 'challenge', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/founder/founder.module#FounderPageModule', name: 'FounderPage', segment: 'founder', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/history/history.module#HistoryPageModule', name: 'HistoryPage', segment: 'history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/library/library.module#LibraryPageModule', name: 'LibraryPage', segment: 'library', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sponsor/sponsor.module#SponsorPageModule', name: 'SponsorPage', segment: 'sponsor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/partner/partner.module#PartnerPageModule', name: 'PartnerPage', segment: 'partner', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/videos/videos.module#VideosPageModule', name: 'VideosPage', segment: 'videos', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_history_history__["a" /* HistoryPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_challenge_challenge__["a" /* ChallengePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_library_library__["a" /* LibraryPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_founder_founder__["a" /* FounderPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_certificate_certificate__["a" /* CertificatePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_partner_partner__["a" /* PartnerPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_sponsor_sponsor__["a" /* SponsorPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_chooser__["a" /* Chooser */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_media_capture__["a" /* MediaCapture */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_dashboard_dashboard__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'لوحة القيادة', component: __WEBPACK_IMPORTED_MODULE_4__pages_dashboard_dashboard__["a" /* DashboardPage */] },
        ];
        if (localStorage.getItem("user") === null) {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        }
        else {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_dashboard_dashboard__["a" /* DashboardPage */];
        }
    }
    MyApp.prototype.logout = function () {
        localStorage.clear();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */]);
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleLightContent();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/macosx/Desktop/Ionic/hemmam_ionic_/src/app/app.html"*/'<ion-menu id="logMenu" [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>قائمة طعام</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      \n        <ion-avatar>\n            <img src="assets/logo of app.png" class="sideimg" alt="">\n          </ion-avatar>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n      <button menuClose ion-item  (click)="logout()">\n          الخروج\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/macosx/Desktop/Ionic/hemmam_ionic_/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/macosx/Desktop/Ionic/hemmam_ionic_/src/pages/list/list.html"*/''/*ion-inline-end:"/Users/macosx/Desktop/Ionic/hemmam_ionic_/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__history_history__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sponsor_sponsor__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__founder_founder__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__library_library__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__partner_partner__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__challenge_challenge__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__certificate_certificate__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_catch__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_file_transfer__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_file__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_camera__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_rxjs__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DashboardPage = /** @class */ (function () {
    function DashboardPage(menuCtrl, transfer, file, camera, navCtrl, http, loadingCtrl, toastCtrl, navParams) {
        this.menuCtrl = menuCtrl;
        this.transfer = transfer;
        this.file = file;
        this.camera = camera;
        this.navCtrl = navCtrl;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.fresh = false;
        this.data = {
            "image": "E:\Xampp\htdocs\hemmam\hemmam_admin\web\assets\cn.png",
            "title": "",
            "profile": "",
            "name": "",
            "email": "",
            "phone": "",
            "level": "",
            "category": "",
            "test": "",
            "items": [
                {
                    "id": 3,
                    "category": "Interior design trends",
                    "title": "Work It Baby: 14 Interior Design",
                    "like": {
                        "icon": "thumbs-up",
                        "number": "4",
                        "text": "Like",
                        "isActive": true
                    },
                    "comment": {
                        "icon": "ios-chatbubbles",
                        "number": "4",
                        "text": "Comments",
                        "isActive": false
                    }
                }
            ]
        };
        this.events = {
            'onItemClick': function (item) {
                console.log("onItemClick");
            },
            'onLike': function (item) {
                if (item && item.like) {
                    if (item.like.isActive) {
                        item.like.isActive = false;
                        item.like.number--;
                    }
                    else {
                        item.like.isActive = true;
                        item.like.number++;
                    }
                }
            },
            'onComment': function (item) {
                if (item && item.comment) {
                    if (item.comment.isActive) {
                        item.comment.isActive = false;
                        item.comment.number--;
                    }
                    else {
                        item.comment.isActive = true;
                        item.comment.number++;
                    }
                }
            }
        };
        this.slider = {};
        this.menuCtrl.enable(true, 'logMenu');
        if (localStorage.getItem("user") === null) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__home_home__["a" /* HomePage */]);
        }
        else {
            this.userdata = JSON.parse(localStorage.getItem('user'));
            this.data.name = this.userdata.name;
            this.data.email = this.userdata.email;
            this.data.level = this.userdata.level_status;
            this.data.profile = this.userdata.personal_image;
            this.id = this.userdata.id;
            if (this.userdata.level_status == null) {
                this.test = '2';
            }
            else {
                this.test = '1';
            }
        }
    }
    DashboardPage_1 = DashboardPage;
    DashboardPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        var refdata = {
            userid: this.id
        };
        this.http.get('http://api.hemam.online/userdate', { params: refdata }).map(function (res) { return res.json(); }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_16_rxjs__["Observable"].create(error.json()); }).subscribe(function (data) {
            var refresult = data;
            _this.reffetchdata = data;
            localStorage.setItem('user', JSON.stringify(refresult));
            _this.userdata = refresult;
            _this.navCtrl.setRoot(DashboardPage_1);
            refresher.complete();
        }, function (err) {
            refresher.complete();
            var toast = _this.toastCtrl.create({
                message: 'شيء ما خطأ. حاول مرة اخرى',
                duration: 4000
            });
            toast.present();
        });
    };
    DashboardPage.prototype.changephoto = function () {
        var _this = this;
        var options = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            saveToPhotoAlbum: false
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            _this.myphoto = 'data:image/jpeg;base64,' + imageData;
            _this.upload();
        }, function (err) {
            // Handle error
        });
        //this.navCtrl.resize();
    };
    DashboardPage.prototype.upload = function () {
        var _this = this;
        var url = localStorage.getItem('server');
        var loader = this.loadingCtrl.create({
            content: "... جار التحميل",
        });
        loader.present();
        console.log(this.myphoto);
        //random int
        var timestamp = new Date().getUTCMilliseconds();
        var fileTransfer = this.transfer.create();
        var optionss = {
            fileKey: 'photo',
            fileName: "myImage_" + timestamp + ".jpg",
            chunkedMode: false,
            httpMethod: 'get',
            mimeType: "image/jpeg",
            headers: {}
        };
        fileTransfer.upload(this.myphoto, 'http://api.hemam.online/photoupdater?userid=' + this.id, optionss)
            .then(function (data) {
            _this.updateuser();
            loader.dismiss();
        }, function (err) {
            // error
            console.log(err.getMessage);
            loader.dismiss();
        });
    };
    // close =====================================================================================================
    DashboardPage.prototype.updateuser = function () {
        var _this = this;
        var refdata = {
            userid: this.id
        };
        this.http.get('http://api.hemam.online/userdate', { params: refdata }).map(function (res) { return res.json(); }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_16_rxjs__["Observable"].create(error.json()); }).subscribe(function (reffetchdata) {
            var refresult = reffetchdata;
            localStorage.setItem('user', JSON.stringify(refresult));
            _this.userdata = refresult;
            _this.navCtrl.setRoot(DashboardPage_1);
        }, function (err) {
            var toast = _this.toastCtrl.create({
                message: 'شيء ما خطأ. حاول مرة اخرى',
                duration: 4000
            });
            toast.present();
        });
    };
    // slideHasChanged(slider, index): void {
    //     this.slider[index] = slider;
    //     if (2 == slider._activeIndex) {
    //         if (this.data.items) {
    //             this.data.items.splice(index, 1);
    //         } else {
    //             this.data.splice(index, 1);
    //         }
    //     }
    // }
    DashboardPage.prototype.onClickEvent = function (index) {
        if (this.slider[index]) {
            this.slider[index].slidePrev(300);
        }
    };
    DashboardPage.prototype.onEvent = function (event, item, e) {
        if (e) {
            e.stopPropagation();
        }
        if (this.events[event]) {
            this.events[event](item);
        }
    };
    DashboardPage.prototype.gotohistory = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__history_history__["a" /* HistoryPage */]);
    };
    DashboardPage.prototype.gotosponser = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__sponsor_sponsor__["a" /* SponsorPage */]);
    };
    DashboardPage.prototype.gotopartner = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__partner_partner__["a" /* PartnerPage */]);
    };
    DashboardPage.prototype.gotofounder = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__founder_founder__["a" /* FounderPage */]);
    };
    DashboardPage.prototype.gotolibrary = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__library_library__["a" /* LibraryPage */]);
    };
    DashboardPage.prototype.gotochallenge = function () {
        // fetching data 
        var _this = this;
        var fetch = {
            userid: this.id
        };
        var loader = this.loadingCtrl.create({
            content: " ...ارجوك انتظر",
        });
        loader.present();
        this.http.get('http://api.hemam.online/videostatus', { params: fetch }).map(function (res) { return res.json(); }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_16_rxjs__["Observable"].create(error.json()); }).subscribe(function (fetchdata) {
            var fresult = fetchdata;
            _this.fetchdata = fetchdata;
            if (fresult == 1) {
                // this.navCtrl.setRoot(DashboardPage);
                console.log('NotGoChallenge');
                var toast = _this.toastCtrl.create({
                    message: 'لا يمكنك تحميل الفيديو التالي. الفيديو الأخير الخاص بك معلقة',
                    duration: 4000
                });
                toast.present();
                _this.navCtrl.setRoot(DashboardPage_1);
            }
            else {
                console.log('GoToChallenge');
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__challenge_challenge__["a" /* ChallengePage */]);
            }
            loader.dismiss();
        }, function (err) {
            loader.dismiss();
            var toast = _this.toastCtrl.create({
                message: 'شيء ما خطأ. حاول مرة اخرى',
                duration: 4000
            });
            toast.present();
        });
        // fetching data close .
    };
    DashboardPage.prototype.gotohicertificate = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__certificate_certificate__["a" /* CertificatePage */]);
    };
    DashboardPage = DashboardPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"/Users/macosx/Desktop/Ionic/hemmam_ionic_/src/pages/dashboard/dashboard.html"*/'<ion-header>\n\n  <ion-navbar><button ion-button menuToggle>\n      <ion-icon name="menu"> </ion-icon>\n    </button>\n    <ion-title>لوحة القيادة</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content></ion-refresher-content>\n      </ion-refresher>\n    <ion-grid *ngIf="data != null">\n        <ion-col col-12>\n            <ion-card padding box-shadow>\n            <ion-avatar>\n              <img src="{{ data.profile }}" alt="">\n             \n            </ion-avatar>\n            <ion-card-content text-center>\n                <ion-badge cs color="accent" (click)="changephoto()"><ion-icon in name="create"></ion-icon></ion-badge>\n              <h1>{{data.name}}</h1>\n              <p>{{data.email}} : البريد الإلكتروني </p>\n              <!-- <p *ngIf="data.level == null" >مستوى :  </p>  -->\n              <p *ngIf="data.test != 1 ">  مستوى : أي مستوى </p> \n              <p *ngIf="data.test == 1 ">مستوى : {{data.level.name}}</p> \n            </ion-card-content>\n            <div style="width:100%; text-align:center;">\n            <button ion-button  outline (click)="gotochallenge()">التحديات</button>\n            <button ion-button  outline (click)="gotohistory()" >التاريخ</button>\n          </div> \n          </ion-card>\n        </ion-col> \n        \n        \n        <br>\n        <ion-grid >\n        <div style="width:100%; text-align:center;">   \n          <button ion-button style="width:45%; " outline (click)="gotofounder()" >مؤسس</button>   \n          <button ion-button style="width:45%; " outline (click)="gotohicertificate()">شهادتي</button>      \n          <button ion-button  outline (click)="gotosponser()">كفيل</button>\n          <button ion-button  outline (click)="gotopartner()">شريك</button>\n          <button ion-button  outline (click)="gotolibrary()">مكتبة</button>            \n          </div>\n          </ion-grid>\n            \n       \n        \n\n      </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/macosx/Desktop/Ionic/hemmam_ionic_/src/pages/dashboard/dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_13__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_14__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_15__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_11__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], DashboardPage);
    return DashboardPage;
    var DashboardPage_1;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = /** @class */ (function () {
    function HomePage(menuCtrl, navCtrl, http, loadingCtrl, toastCtrl) {
        var _this = this;
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.isUsernameValidLogin = true;
        this.isPasswordValidLogin = true;
        this.isEmailValidRegister = true;
        this.isUsernameValidRegister = true;
        this.isPasswordValidRegister = true;
        this.isCountryValidRegister = true;
        this.isMobileValidRegister = true;
        this.isNationalityValidRegister = true;
        this.isIdnumberValidRegister = true;
        this.isAddresssValidRegister = true;
        this.isStateValidRegister = true;
        this.isEducationLevelValidRegister = true;
        this.isMajorValidRegister = true;
        this.isUniversityValidRegister = true;
        this.isGraduationYearValidRegister = true;
        this.isWorkplaceValidRegister = true;
        this.isVoulntrySideValidRegister = true;
        this.regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.selectedItem = "login";
        this.onEvent = function (event) {
            if (event == "onLogin") {
                if (_this.validateLogin()) {
                    var datta = {
                        useremail: _this.usernameLogin,
                        userpass: _this.passwordLogin
                    };
                    console.log('clicked');
                    var loader_1 = _this.loadingCtrl.create({
                        content: " ... جلب البيانات",
                    });
                    loader_1.present();
                    _this.http.get('http://api.hemam.online/loginuser', { params: datta }).map(function (res) { return res.json(); }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"].create(error.json()); }).subscribe(function (dataa) {
                        var result = dataa;
                        _this.dataa = dataa;
                        loader_1.dismiss();
                        if (result != 0) {
                            localStorage.setItem('user', JSON.stringify(result));
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__["a" /* DashboardPage */]);
                        }
                        else {
                            var toast = _this.toastCtrl.create({
                                message: 'بيانات الاعتماد الخاصة بك ليست صحيحة',
                                duration: 4000
                            });
                            toast.present();
                        }
                    }, function (err) {
                        var toast = _this.toastCtrl.create({
                            message: 'شيء ما خطأ. حاول مرة اخرى',
                            duration: 4000
                        });
                        toast.present();
                        loader_1.dismiss();
                    });
                }
                if (_this.events[event]) {
                    _this.events[event]({
                        'username': _this.usernameLogin,
                        'password': _this.passwordLogin
                    });
                }
            }
            else if (event == "onRegister") {
                if (_this.validateRegister()) {
                    console.log('clicked ======');
                    var datta = {
                        usernameR: _this.usernameRegister,
                        passwordR: _this.passwordRegister,
                        countryR: _this.countryRegister,
                        emailR: _this.emailRegister,
                        mobileR: _this.mobileRegister,
                        genderR: _this.genderRegister,
                        nationalityR: _this.nationalityRegister,
                        identificationtypeR: _this.identificationtypeRegister,
                        idNumberR: _this.idnumberRegister,
                        addresssR: _this.addresssRegister,
                        stateR: _this.stateRegister,
                        educationLevelR: _this.educationLevelRegister,
                        majorR: _this.majorRegister,
                        universityR: _this.universityRegister,
                        graduationYearR: _this.graduationYearRegister,
                        workplaceR: _this.workplaceRegister,
                        voulntrySideR: _this.voulntrySideRegister,
                    };
                    console.log('clicked');
                    var loader_2 = _this.loadingCtrl.create({
                        content: "... جلب البيانات",
                    });
                    loader_2.present();
                    _this.http.get('http://api.hemam.online/registeruser', { params: datta }).map(function (res) { return res.json(); }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"].create(error.json()); }).subscribe(function (dataa) {
                        var result = dataa;
                        _this.dataa = dataa;
                        loader_2.dismiss();
                        if (result == 1) {
                            var toast = _this.toastCtrl.create({
                                message: 'البريد الالكتروني موجود بالفعل',
                                duration: 4000
                            });
                            toast.present();
                        }
                        else {
                            localStorage.setItem('user', JSON.stringify(result));
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__["a" /* DashboardPage */]);
                        }
                    }, function (err) {
                        var toast = _this.toastCtrl.create({
                            message: 'شيء ما خطأ. حاول مرة اخرى',
                            duration: 4000
                        });
                        toast.present();
                        loader_2.dismiss();
                    });
                }
                if (_this.events[event]) {
                    _this.events[event]({});
                }
            }
        };
        this.menuCtrl.enable(false, 'logMenu');
        if (localStorage.getItem("user") === null) {
        }
        else {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__["a" /* DashboardPage */]);
        }
        this.data = {
            "segmentLogin": "تسجيل الدخول",
            "segmentRegister": "تسجيل",
            "background": "assets/images/background/39.jpg",
            "skip": "تخطى",
            "logo": "assets/logo of app.png",
            "login": {
                "username": " أدخل البريد الإلكتروني الخاص بك ",
                "password": " ادخل رقمك السري ",
                "labelUsername": "البريد الإلكتروني",
                "labelPassword": "كلمه السر",
                "forgotPassword": "هل نسيت كلمة المرور؟",
                "facebookLogin": "تسجيل الدخول مع",
                "login": "تسجيل الدخول",
                "title": "تسجيل الدخول إلى حسابك",
                "errorUser": "لا يمكن أن يكون الحقل خاليًا",
                "errorPassword": "لا يمكن أن يكون الحقل خاليًا"
            },
            "register": {
                "title": "تسجيل",
                "username": "أدخل اسمك الكامل",
                "city": "مسقط رأسك",
                "password": "ادخل رقمك السري",
                "email": "عنوان بريدك الإلكتروني",
                "Mobile": "أدخل هاتفك المحمول",
                "Nationality": "أدخل جنسيتك",
                "Identificationtype": "ادخل رقمك السري",
                "IdNumber": "أدخل رقم الهوية الخاص بك",
                "Addresss": "من أي بلد أنت؟",
                "State": "أدخل دولتك",
                "EducationLevel": "أدخل مستوى التعليم الخاص بك",
                "Major": "أدخل تخصصك",
                "University": "أدخل جامعتك",
                "GraduationYear": "ادخل سنة التخرج",
                "Workplace": "أدخل مكان عملك",
                "VoulntrySide": "",
                "register": "تسجيل",
                "lableUsername": "الاسم الكامل",
                "lablePassword": "كلمه السر",
                "lableEmail": "البريد الإلكتروني",
                "lableMobile": "التليفون المحمول",
                "lableNationality": "الجنسية",
                "lableIdentificationtype": "نوع الهوية",
                "lableIdNumber": "رقم الهوية",
                "lableAddresss": "عنوان",
                "lableState": "حالة",
                "lableEducationLevel": "مستوى التعليم",
                "lableMajor": "رائد",
                "lableUniversity": "جامعة",
                "lableGraduationYear": "سنة التخرج",
                "lableWorkplace": "مكان العمل",
                "lableVoulntrySide": "طوعي الجانب",
                "lablePersonalImage": "صورة شخصية",
                "errorUser": "لا يمكن أن يكون الحقل خاليًا",
                "errorPassword": "لا يمكن أن يكون الحقل خاليًا",
                "errorEmail": "عنوان البريد الإلكتروني غير صالح",
                "errorCountry": "لا يمكن أن يكون الحقل خاليًا",
                "errorCity": "لا يمكن أن يكون الحقل خاليًا"
            }
        };
        this.events = {
            onLogin: function (params) {
                console.log("onLogin");
            },
            onRegister: function (params) {
                console.log("onRegister");
            },
            onSkip: function (params) {
                console.log("onSkip");
            },
            onFacebook: function (params) {
                console.log("onFacebook");
            }
        };
    }
    HomePage.prototype.validateLogin = function () {
        this.isUsernameValidLogin = true;
        this.isPasswordValidLogin = true;
        if (!this.usernameLogin || this.usernameLogin.length == 0) {
            this.isUsernameValidLogin = false;
        }
        if (!this.passwordLogin || this.passwordLogin.length == 0) {
            this.isPasswordValidLogin = false;
        }
        return this.isPasswordValidLogin && this.isUsernameValidLogin;
    };
    HomePage.prototype.validateRegister = function () {
        this.isEmailValidRegister = true;
        this.isUsernameValidRegister = true;
        this.isPasswordValidRegister = true;
        this.isCountryValidRegister = true;
        this.isMobileValidRegister = true;
        this.isNationalityValidRegister = true;
        this.isIdnumberValidRegister = true;
        this.isAddresssValidRegister = true;
        this.isStateValidRegister = true;
        this.isEducationLevelValidRegister = true;
        this.isMajorValidRegister = true;
        this.isUniversityValidRegister = true;
        this.isGraduationYearValidRegister = true;
        this.isWorkplaceValidRegister = true;
        this.isVoulntrySideValidRegister = true;
        if (!this.usernameRegister || this.usernameRegister.length == 0) {
            this.isUsernameValidRegister = false;
        }
        if (!this.emailRegister || this.emailRegister.length == 0) {
            this.isEmailValidRegister = false;
        }
        if (!this.passwordRegister || this.passwordRegister.length == 0) {
            this.isPasswordValidRegister = false;
        }
        if (!this.mobileRegister || this.mobileRegister.length == 0) {
            this.isMobileValidRegister = false;
        }
        // if (!this.genderRegister || this.genderRegister.length == 0) {
        //     this.isgenderValidRegister = false;
        // }  
        // if (!this.countryRegister || this.countryRegister.length == 0) {
        //       this.isCountryValidRegister = false;
        // }
        if (!this.nationalityRegister || this.nationalityRegister.length == 0) {
            this.isNationalityValidRegister = false;
        }
        // if (!this.identificationtypeRegister || this.identificationtypeRegister.length == 0) {
        //     this.isIdentificationtypeValidRegister = false;
        // }
        if (!this.idnumberRegister || this.idnumberRegister.length == 0) {
            this.isIdnumberValidRegister = false;
        }
        if (!this.addresssRegister || this.addresssRegister.length == 0) {
            this.isAddresssValidRegister = false;
        }
        if (!this.stateRegister || this.stateRegister.length == 0) {
            this.isStateValidRegister = false;
        }
        if (!this.educationLevelRegister || this.educationLevelRegister.length == 0) {
            this.isEducationLevelValidRegister = false;
        }
        if (!this.majorRegister || this.majorRegister.length == 0) {
            this.isMajorValidRegister = false;
        }
        if (!this.universityRegister || this.universityRegister.length == 0) {
            this.isUniversityValidRegister = false;
        }
        if (!this.graduationYearRegister || this.graduationYearRegister.length == 0) {
            this.isGraduationYearValidRegister = false;
        }
        if (!this.workplaceRegister || this.workplaceRegister.length == 0) {
            this.isWorkplaceValidRegister = false;
        }
        if (!this.voulntrySideRegister || this.voulntrySideRegister.length == 0) {
            this.isVoulntrySideValidRegister = false;
        }
        // this.isEmailValidRegister = this.regex.test(this.emailRegister);
        return this.isEmailValidRegister &&
            this.isPasswordValidRegister &&
            this.isUsernameValidRegister &&
            this.isCountryValidRegister &&
            this.isMobileValidRegister &&
            this.isNationalityValidRegister &&
            this.isIdnumberValidRegister &&
            this.isAddresssValidRegister &&
            this.isStateValidRegister &&
            this.isEducationLevelValidRegister &&
            this.isMajorValidRegister &&
            this.isUniversityValidRegister &&
            this.isGraduationYearValidRegister &&
            this.isWorkplaceValidRegister &&
            this.isVoulntrySideValidRegister;
    };
    HomePage.prototype.isEnabled = function (value) {
        return this.selectedItem == value;
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/macosx/Desktop/Ionic/hemmam_ionic_/src/pages/home/home.html"*/'<!-- Themes Login + logo 1 -->\n<ion-content has-header *ngIf="data != null" background-size [ngStyle]="{\'background-image\': \'url(\' + data.background + \')\'}">\n  <ion-grid no-padding *ngIf="data != null">\n    <div segment-block>\n      <ion-segment has-header [(ngModel)]="selectedItem">\n        <ion-segment-button value="login">\n          {{data.segmentLogin}}\n        </ion-segment-button>\n        <ion-segment-button value="register">\n          {{data.segmentRegister}}\n        </ion-segment-button>\n      </ion-segment>\n    </div>\n\n    <!--- SETTINGS LOGIN SCREEN -->\n    <ion-row *ngIf="isEnabled(\'login\')" padding-left padding-right align-items-center>\n      <ion-col margin-bottom col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n        <ion-item transparent  no-lines>\n          <!---Logo-->\n          <img item-start [src]="data.logo" class="applogo">\n        </ion-item>\n      </ion-col>\n      <ion-col text-center col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n        <form margin-bottom>\n        <!---Logo Title-->\n        <!---Input field username-->\n        <ion-item text-center transparent>\n          <ion-label stacked>{{data.login.labelUsername}}</ion-label>\n          <ion-input text-center required type="email" [placeholder]="data.login.username" [(ngModel)]="usernameLogin" [ngModelOptions]="{standalone: true}"></ion-input>\n          <ion-label error-field no-margin *ngIf="!isUsernameValidLogin">{{data.login.errorUser}}</ion-label>\n        </ion-item>\n        <!---Input field password-->\n        <ion-item transparent>\n          <ion-label stacked>{{data.login.labelPassword}}</ion-label>\n          <ion-input text-center required type="password" [placeholder]="data.login.password" [(ngModel)]="passwordLogin" [ngModelOptions]="{standalone: true}"></ion-input>\n          <ion-label error-field no-margin *ngIf="!isPasswordValidLogin">{{data.login.errorPassword}}</ion-label>\n        </ion-item>\n        \n        <div button-form>\n          <!---Facebook button-->\n          \n          <!---Login button-->\n          <button ion-button default-button text-capitalize box-shadow (click)="onEvent(\'onLogin\')">{{data.login.login}}</button>\n        </div>\n      </form>\n      </ion-col>\n    </ion-row>\n\n    <!--- SETTINGS REGISTER SCREEN -->\n    <ion-row *ngIf="isEnabled(\'register\')" padding-left padding-right align-items-center>\n      <ion-col margin-bottom col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n        <ion-item transparent no-margin no-padding no-lines>\n          <!---Logo-->\n          <img item-start [src]="data.logo">\n        </ion-item>\n      </ion-col>\n      <ion-col text-center col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n        <form margin-bottom>\n          <!-- Register Title -->\n          <h1 register-title no-margin padding-bottom text-wrap>{{data.register.title}}</h1>\n          <!--Form-->\n          <ion-item text-center>\n            <!---Input field username-->\n            <ion-label stacked>{{data.register.lableUsername}}</ion-label>\n            <ion-input text-center required [placeholder]="data.register.username" type="text" [(ngModel)]="usernameRegister" [ngModelOptions]="{standalone: true}"></ion-input>\n            <ion-label error-field no-margin *ngIf="!isUsernameValidRegister">{{data.register.errorUser}}</ion-label>\n          </ion-item>\n          \n          <ion-item text-center>\n            <!---Input field email-->\n            <ion-label stacked>{{data.register.lableEmail}}</ion-label>\n            <ion-input text-center required [placeholder]="data.register.email" type="email"  required [(ngModel)]="emailRegister" [ngModelOptions]="{standalone: true}"></ion-input>\n            <ion-label error-field no-margin *ngIf="!isEmailValidRegister">{{data.register.errorEmail}}</ion-label>\n          </ion-item>\n          <ion-item text-center>\n              <!---Input field password-->\n              <ion-label stacked>{{data.register.lablePassword}}</ion-label>\n              <ion-input text-center required [placeholder]="data.register.password" type="password" [(ngModel)]="passwordRegister" [ngModelOptions]="{standalone: true}"></ion-input>\n              <ion-label error-field no-margin *ngIf="!isPasswordValidRegister">{{data.register.errorPassword}}</ion-label>\n            </ion-item>\n\n            <ion-item text-center>\n                <!---Input field Mobile-->\n                <ion-label stacked>{{data.register.lableMobile}}</ion-label>\n                <ion-input text-center required [placeholder]="data.register.Mobile" type="number" [(ngModel)]="mobileRegister" [ngModelOptions]="{standalone: true}"></ion-input>\n                <ion-label error-field no-margin *ngIf="!isMobileValidRegister">{{data.register.errorPassword}}</ion-label>\n              </ion-item>\n\n              <ion-item text-center drop>\n                <ion-label>جنس</ion-label>\n                <ion-select [(ngModel)]="genderRegister" [ngModelOptions]="{standalone: true}">\n                    <ion-option value="الذكر">الذكر</ion-option>\n                    <ion-option value="إناثا">إناثا</ion-option>\n                </ion-select>\n              </ion-item>\n\n              <!-- <ion-item text-center> -->\n                  <!---Input field BirthDay-->\n                  <!-- <ion-label stacked>{{data.register.lableMobile}}</ion-label>\n                  <ion-input text-center required [placeholder]="data.register.password" type="password" [(ngModel)]="passwordRegister" [ngModelOptions]="{standalone: true}"></ion-input>\n                  <ion-label error-field no-margin *ngIf="!isPasswordValidRegister">{{data.register.errorPassword}}</ion-label>\n                </ion-item> -->\n\n                <ion-item text-center>\n                    <!---Input field Nationality-->\n                    <ion-label stacked>{{data.register.lableNationality}}</ion-label>\n                    <ion-input text-center required [placeholder]="data.register.Nationality" type="text" [(ngModel)]="nationalityRegister" [ngModelOptions]="{standalone: true}"></ion-input>\n                    <ion-label error-field no-margin *ngIf="!isNationalityValidRegister">{{data.register.errorCountry}}</ion-label>\n                  </ion-item>\n\n                  <ion-item text-center drop>\n                      <ion-label>نوع الهوية</ion-label>\n                      <ion-select [(ngModel)]="identificationtypeRegister" [ngModelOptions]="{standalone: true}">\n                          <ion-option value="ID">هوية شخصية</ion-option>\n                          <ion-option value="Passport">جواز سفر</ion-option>\n                      </ion-select>\n                  </ion-item>\n          <ion-item text-center>\n            <!---Input field Id Number-->\n            <ion-label stacked>{{data.register.lableIdNumber}}</ion-label>\n            <ion-input text-center required [placeholder]="data.register.IdNumber" type="text"  required [(ngModel)]="idnumberRegister" [ngModelOptions]="{standalone: true}"></ion-input>\n            <ion-label error-field no-margin *ngIf="!isIdnumberValidRegister">{{data.register.errorCountry}}</ion-label>\n          </ion-item>\n\n          <ion-item text-center>\n              <!---Input field Addresss-->\n              <ion-label stacked>{{data.register.lableAddresss}}</ion-label>\n              <ion-input text-center required [placeholder]="data.register.Addresss" type="text"  required [(ngModel)]="addresssRegister" [ngModelOptions]="{standalone: true}"></ion-input>\n              <ion-label error-field no-margin *ngIf="!isAddresssValidRegister">{{data.register.errorCountry}}</ion-label>\n          </ion-item>\n\n          <ion-item text-center>\n              <!---Input field State-->\n              <ion-label stacked>{{data.register.lableState}}</ion-label>\n              <ion-input text-center required [placeholder]="data.register.State" type="text"  required [(ngModel)]="stateRegister" [ngModelOptions]="{standalone: true}"></ion-input>\n              <ion-label error-field no-margin *ngIf="!isStateValidRegister">{{data.register.errorCountry}}</ion-label>\n          </ion-item>\n\n          <ion-item text-center>\n              <!---Input field EducationLevel-->\n              <ion-label stacked>{{data.register.lableEducationLevel}}</ion-label>\n              <ion-input text-center required [placeholder]="data.register.EducationLevel" type="text"  required [(ngModel)]="educationLevelRegister" [ngModelOptions]="{standalone: true}"></ion-input>\n              <ion-label error-field no-margin *ngIf="!isEducationLevelValidRegister">{{data.register.errorCountry}}</ion-label>\n          </ion-item>\n\n          <ion-item text-center>\n              <!---Input field Major-->\n              <ion-label stacked>{{data.register.lableMajor}}</ion-label>\n              <ion-input text-center required [placeholder]="data.register.Major" type="text"  required [(ngModel)]="majorRegister" [ngModelOptions]="{standalone: true}"></ion-input>\n              <ion-label error-field no-margin *ngIf="!isMajorValidRegister">{{data.register.errorCountry}}</ion-label>\n          </ion-item>\n\n          <ion-item text-center>\n              <!---Input field University-->\n              <ion-label stacked>{{data.register.lableUniversity}}</ion-label>\n              <ion-input text-center required [placeholder]="data.register.University" type="text"  required [(ngModel)]="universityRegister" [ngModelOptions]="{standalone: true}"></ion-input>\n              <ion-label error-field no-margin *ngIf="!isUniversityValidRegister">{{data.register.errorCountry}}</ion-label>\n          </ion-item>\n          <ion-item text-center>\n              <!---Input field Graduation Year-->\n              <ion-label stacked>{{data.register.lableGraduationYear}}</ion-label>\n              <ion-input text-center required [placeholder]="data.register.GraduationYear" type="text"  required [(ngModel)]="graduationYearRegister" [ngModelOptions]="{standalone: true}"></ion-input>\n              <ion-label error-field no-margin *ngIf="!isGraduationYearValidRegister">{{data.register.errorCountry}}</ion-label>\n          </ion-item>\n          <ion-item text-center>\n              <!---Input field Workplace-->\n              <ion-label stacked>{{data.register.lableWorkplace}}</ion-label>\n              <ion-input text-center required [placeholder]="data.register.Workplace" type="text"  required [(ngModel)]="workplaceRegister" [ngModelOptions]="{standalone: true}"></ion-input>\n              <ion-label error-field no-margin *ngIf="!isWorkplaceValidRegister">{{data.register.errorCountry}}</ion-label>\n          </ion-item>\n          <ion-item text-center>\n              <!---Input field Voulntry Side-->\n              <ion-label stacked>{{data.register.lableVoulntrySide}}</ion-label>\n              <ion-input text-center required [placeholder]="data.register.VoulntrySide" type="text"  required [(ngModel)]="voulntrySideRegister" [ngModelOptions]="{standalone: true}"></ion-input>\n              <ion-label error-field no-margin *ngIf="!isVoulntrySideValidRegister">{{data.register.errorCountry}}</ion-label>\n          </ion-item>\n\n          \n          <!---Register button-->\n          <button ion-button default-button text-capitalize box-shadow (click)="onEvent(\'onRegister\')">{{data.register.register}}</button>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/macosx/Desktop/Ionic/hemmam_ionic_/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[278]);
//# sourceMappingURL=main.js.map