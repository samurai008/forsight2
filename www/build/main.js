webpackJsonp([0],{

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_news_service__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__details_details__ = __webpack_require__(275);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewsPage = (function () {
    function NewsPage(navCtrl, newsService) {
        this.navCtrl = navCtrl;
        this.newsService = newsService;
    }
    NewsPage.prototype.ngOnInit = function () {
        // console.log('onInit ran');
        this.getPosts();
    };
    NewsPage.prototype.getPosts = function () {
        var _this = this;
        this.newsService.getPosts().subscribe(function (response) {
            // console.log("news response=", response);
            _this.items = response;
        });
    };
    NewsPage.prototype.viewItem = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__details_details__["a" /* DetailsPage */], {
            'item': item,
        });
    };
    return NewsPage;
}());
NewsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'news',template:/*ion-inline-start:"/Users/pranavarora/Work/ionicApps/dotslash/forsight-master/src/pages/news/news.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      News\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content style="background-color: #EBF5FB;">\n  <!-- <div class="background-image"></div> -->\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 col-md-6 *ngFor="let item of items">\n        <ion-card (click)="viewItem(item)">\n          <ion-card-header>\n            <ion-item text-wrap>\n              <h2>{{item.title}}</h2>\n              <ion-thumbnail *ngIf="item.photo" item-end>\n                <img src="{{item.photo}}" width="50px" height="50px" alt="">\n              </ion-thumbnail>\n            </ion-item>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/pranavarora/Work/ionicApps/dotslash/forsight-master/src/pages/news/news.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__app_services_news_service__["a" /* NewsService */]],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__app_services_news_service__["a" /* NewsService */]])
], NewsPage);

//# sourceMappingURL=news.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editUser__ = __webpack_require__(276);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserPage = (function () {
    function UserPage(navCtrl, storage) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.getData();
    }
    UserPage.prototype.ngOnInit = function () {
        if (this.getData() == false) {
            // this.setInitData();
        }
    };
    UserPage.prototype.setInitData = function () {
        this.storage.set('name', 'Arjun Gupta');
        this.storage.set('age', '21');
        this.storage.set('phone', '8860303743');
        this.storage.set('address', '91springboard, Sector-1,Noida');
        this.storage.set('od_sph', '2.0');
        this.storage.set('od_cyl', '0');
        this.storage.set('od_axis', '180');
        this.storage.set('od_va', '6/6');
        this.storage.set('os_sph', '2.0');
        this.storage.set('os_cyl', '0');
        this.storage.set('os_axis', '180');
        this.storage.set('os_va', '6/6');
    };
    UserPage.prototype.getData = function () {
        var _this = this;
        this.storage.get('name').then(function (val) {
            if (val == null) {
                return false;
            }
            _this.name = val;
        });
        this.storage.get('age').then(function (val) {
            if (val == null) {
                return false;
            }
            _this.age = val;
        });
        this.storage.get('phone').then(function (val) {
            if (val == null) {
                return false;
            }
            _this.phone = val;
        });
        this.storage.get('address').then(function (val) {
            if (val == null) {
                return false;
            }
            _this.address = val;
        });
        this.storage.get('od_sph').then(function (val) {
            if (val == null) {
                return false;
            }
            _this.od_sph = val;
        });
        this.storage.get('od_cyl').then(function (val) {
            if (val == null) {
                return false;
            }
            _this.od_cyl = val;
        });
        this.storage.get('od_va').then(function (val) {
            if (val == null) {
                return false;
            }
            _this.od_va = val;
        });
        this.storage.get('od_axis').then(function (val) {
            if (val == null) {
                return false;
            }
            _this.od_axis = val;
        });
        this.storage.get('os_sph').then(function (val) {
            if (val == null) {
                return false;
            }
            _this.os_sph = val;
        });
        this.storage.get('os_cyl').then(function (val) {
            if (val == null) {
                return false;
            }
            _this.os_cyl = val;
        });
        this.storage.get('os_va').then(function (val) {
            if (val == null) {
                return false;
            }
            _this.os_va = val;
        });
        this.storage.get('os_axis').then(function (val) {
            if (val == null) {
                return false;
            }
            _this.os_axis = val;
        });
        return true;
    };
    UserPage.prototype.editUser = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__editUser__["a" /* EditUserPage */], {});
    };
    return UserPage;
}());
UserPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-user',template:/*ion-inline-start:"/Users/pranavarora/Work/ionicApps/dotslash/forsight-master/src/pages/user/user.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      User Profile\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="buttons-components-page" style="background-color: #EBF5FB;">\n  <!-- <div class="background-image"></div> -->\n\n  <ion-card>\n    <ion-card-content>\n      <img src="assets/icon/user.png" />\n    </ion-card-content>\n\n    <ion-item>\n      <button ion-button clear item-end (click)="editUser()">Edit Profile</button>\n    </ion-item>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>My Information</ion-card-header>\n    <ion-list>\n      <ion-item>\n        Name: {{name}}\n\n      </ion-item>\n\n      <ion-item>\n        Age: {{this.age}}\n\n      </ion-item>\n\n      <ion-item>\n        Phone: {{phone}}\n\n      </ion-item>\n\n      <ion-item>\n        Address: {{address}}\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>My Prescription</ion-card-header>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-card-header>Right Eye (OD)</ion-card-header>\n          <ion-item>Sph:{{od_sph}}</ion-item>\n          <ion-item>Cyl:{{od_cyl}}</ion-item>\n          <ion-item>Axis:{{od_axis}}</ion-item>\n          <ion-item>VA:{{od_va}}</ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-card-header>Left Eye (OD)</ion-card-header>\n          <ion-item>Sph:{{os_sph}}</ion-item>\n          <ion-item>Cyl:{{os_cyl}}</ion-item>\n          <ion-item>Axis:{{os_axis}}</ion-item>\n          <ion-item>VA:{{os_va}}</ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/pranavarora/Work/ionicApps/dotslash/forsight-master/src/pages/user/user.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], UserPage);

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_optometrist_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__optometrist_optometrist__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchPage = (function () {
    function SearchPage(navCtrl, optometristService) {
        this.navCtrl = navCtrl;
        this.optometristService = optometristService;
        this.searchTerm = '';
    }
    SearchPage.prototype.ionViewDidLoad = function () {
        this.setFilteredItems();
    };
    SearchPage.prototype.setFilteredItems = function () {
        if (this.searchTerm != "") {
            this.items = this.optometristService.filterItemsByName(this.searchTerm);
        }
        else {
            this.items = null;
        }
    };
    SearchPage.prototype.search = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__optometrist_optometrist__["a" /* OptometristPage */], {
            'item': item,
        });
    };
    return SearchPage;
}());
SearchPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'search',template:/*ion-inline-start:"/Users/pranavarora/Work/ionicApps/dotslash/forsight-master/src/pages/search/search.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Search By Name\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="status" style="background-color: #EBF5FB;">\n  <!-- <div class="background-image"></div> -->\n  <ion-searchbar [(ngModel)]="searchTerm" (ionInput)="setFilteredItems()"></ion-searchbar>\n\n  <ion-card>\n    <ion-list *ngFor="let item of items" (click)="search(item)">\n      <ion-list-header>\n        {{item.name}}\n      </ion-list-header>\n    </ion-list>\n  </ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/pranavarora/Work/ionicApps/dotslash/forsight-master/src/pages/search/search.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__app_services_optometrist_service__["a" /* OptometristService */]])
], SearchPage);

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchBySpecPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_optometrist_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__optometristList_optometristList__ = __webpack_require__(278);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchBySpecPage = (function () {
    function SearchBySpecPage(navCtrl, optometristService) {
        this.navCtrl = navCtrl;
        this.optometristService = optometristService;
        this.searchTerm = '';
        this.getSpecialisations();
    }
    SearchBySpecPage.prototype.ionViewDidLoad = function () {
        // this.setFilteredItems();
    };
    SearchBySpecPage.prototype.getSpecialisations = function () {
        var _this = this;
        this.optometristService
            .getSpecialisationInit()
            .subscribe(function (data) {
            _this.items = data;
            // return data;
            console.log("items in search=", _this.items);
        });
    };
    SearchBySpecPage.prototype.setFilteredItems = function () {
        this.items = this.optometristService.filterItemsByName(this.searchTerm);
    };
    SearchBySpecPage.prototype.select = function (item) {
        this.optometrists = this.optometristService.filterItemsBySpec(item);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__optometristList_optometristList__["a" /* OptometristListPage */], {
            'optometrists': this.optometrists,
        });
    };
    return SearchBySpecPage;
}());
SearchBySpecPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'searchSpec',template:/*ion-inline-start:"/Users/pranavarora/Work/ionicApps/dotslash/forsight-master/src/pages/search/searchBySpec.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Search By Specialisation\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="status" style="background-color: #EBF5FB;">\n  <!-- <div class="background-image"></div> -->\n  <!-- <ion-searchbar [(ngModel)]="searchTerm" (ionInput)="setFilteredItems()"></ion-searchbar> -->\n\n  <ion-searchbar [(ngModel)]="query"></ion-searchbar>\n\n  <ion-card>\n    <ion-list *ngFor="let item of items | search:\'title\':query" (click)="select(item.title)">\n      <ion-list-header>\n        {{item.title}}\n      </ion-list-header>\n    </ion-list>\n  </ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/pranavarora/Work/ionicApps/dotslash/forsight-master/src/pages/search/searchBySpec.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__app_services_optometrist_service__["a" /* OptometristService */]])
], SearchBySpecPage);

//# sourceMappingURL=searchBySpec.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_google_maps_google_maps__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_native__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__optometrist_optometrist__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__directions_directions__ = __webpack_require__(412);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import {OptometristService} from '../../app/services/optometrist.service';




var MapPage = (function () {
    function MapPage(navCtrl, maps, platform, 
        // private optometristService: OptometristService,
        http) {
        this.navCtrl = navCtrl;
        this.maps = maps;
        this.platform = platform;
        this.http = http;
        this.baseUrl = 'http://oapp.delhinerds.com/distance/';
        this.getOptometrists();
    }
    MapPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.ready().then(function () {
            setTimeout(function () {
                var mapLoaded = _this.maps.init(_this.mapElement.nativeElement, _this.pleaseConnect.nativeElement);
                // console.log(this.abc.nativeElement.innerText);
            }, 1000);
        });
    };
    MapPage.prototype.getCookie = function (name) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length == 2)
            return parts.pop().split(";").shift();
    };
    MapPage.prototype.getOptometrists = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'X-CSRFToken': this.getCookie('csrftoken')
        });
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
        __WEBPACK_IMPORTED_MODULE_3_ionic_native__["a" /* Geolocation */].getCurrentPosition().then(function (position) {
            _this.lat = position.coords.latitude;
            _this.lon = position.coords.longitude;
            // console.log("distance data mapsts=", this.lat, this.lon);
            return _this.http.post(_this.baseUrl, { lon: _this.lon, lat: _this.lat }, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (response) {
                console.log("response here new=", response);
                _this.optometristsByDistance = response["optometrists"];
            });
        });
    };
    MapPage.prototype.search = function (item) {
        // console.log("item.photo in maps.ts before=", item.photo);
        item.photo = "http://oapp.delhinerds.com" + item.photo;
        // console.log("item.photo in maps.ts after=", item.photo);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__optometrist_optometrist__["a" /* OptometristPage */], {
            'item': item,
        });
    };
    MapPage.prototype.getDirections = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__directions_directions__["a" /* DirectionsPage */], {
            'item': item["optometrist"],
            'lon': this.lon,
            'lat': this.lat,
            'optoLon': item["workplace"]["long"],
            'optoLat': item["workplace"]["lat"],
        });
    };
    return MapPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], MapPage.prototype, "mapElement", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('pleaseConnect'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], MapPage.prototype, "pleaseConnect", void 0);
MapPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-map',template:/*ion-inline-start:"/Users/pranavarora/Work/ionicApps/dotslash/forsight-master/src/pages/map/map.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Optometrists Near Me\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <div #pleaseConnect id="please-connect">\n    <p>Please wait for the map to load.</p>\n  </div>\n  <div #map id="map"></div>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12>\n        <ion-card>\n            <!-- <ion-list> -->\n              <ion-list-header>\n                <h1>Optometrists Near Me</h1>\n              </ion-list-header>\n              <ion-list *ngFor="let each of optometristsByDistance">\n                <ion-list-header>\n                  <h2>{{ each.optometrist.name }}</h2>\n                  <button ion-button color="light" (click)="getDirections(each)">Get Directions On Map</button>\n                  <br>\n                  <button ion-button color="light"  (click)="search(each.optometrist)">Show Optometrist Profile</button>\n                  <br>\n                  <p>From your current location:</p>\n                  <p *ngIf="each.distanceText">&nbsp;Distance= {{ each.distanceText }}</p>\n                  <p *ngIf="each.durationText">&nbsp;Duration= {{ each.durationText }}</p>\n                  <p *ngIf="each.optometrist.workplaceAddress">&nbsp;Address = {{ each.optometrist.workplaceAddress }}\n\n                  <br>\n                  <p>Workplace : {{ each.workplace.name}}</p>\n                  <p>Workplace Address: {{ each.workplace.address}}</p>\n                  \n                  <p *ngIf="each.optometrist.qualification">• {{ each.optometrist.qualification }} </p>\n                  <p *ngIf="each.optometrist.workExperience">• {{ each.optometrist.workExperience }}</p>\n                </ion-list-header>\n              </ion-list>\n\n              <!-- <ion-item-group *ngFor="let each of optometristsByDistance" (click)="search(each.optometrist)">\n                <ion-item>\n                  <h2>{{ each.optometrist.name }}</h2>\n                  <p>From your current location:</p>\n                  <p *ngIf="each.distanceText">Distance= {{ each.distanceText }}</p>\n                  <p *ngIf="each.durationText">Duration= {{ each.durationText }}</p>\n\n                  <p *ngIf="each.optometrist.workplaceName">• {{ each.optometrist.workplaceName }}</p>\n                  <p *ngIf="each.optometrist.qualification">• {{ each.optometrist.qualification }} </p>\n                  <p *ngIf="each.optometrist.workExperience">• {{ each.optometrist.workExperience }}</p>\n                </ion-item>\n              </ion-item-group> -->\n            <!-- </ion-list> -->\n          </ion-card>\n\n\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/pranavarora/Work/ionicApps/dotslash/forsight-master/src/pages/map/map.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1__providers_google_maps_google_maps__["a" /* GoogleMapsProvider */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]])
], MapPage);

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectivityProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_native__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConnectivityProvider = (function () {
    function ConnectivityProvider(platform) {
        this.platform = platform;
        this.onDevice = this.platform.is('android');
    }
    ConnectivityProvider.prototype.isOnline = function () {
        if (this.onDevice && __WEBPACK_IMPORTED_MODULE_2_ionic_native__["b" /* Network */].type) {
            return __WEBPACK_IMPORTED_MODULE_2_ionic_native__["b" /* Network */].type !== Connection.NONE;
        }
        else {
            return navigator.onLine;
        }
    };
    ConnectivityProvider.prototype.isOffline = function () {
        if (this.onDevice && __WEBPACK_IMPORTED_MODULE_2_ionic_native__["b" /* Network */].type) {
            return __WEBPACK_IMPORTED_MODULE_2_ionic_native__["b" /* Network */].type === Connection.NONE;
        }
        else {
            return !navigator.onLine;
        }
    };
    return ConnectivityProvider;
}());
ConnectivityProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* Platform */]])
], ConnectivityProvider);

//# sourceMappingURL=connectivity.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleMapsDirProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__connectivity_connectivity__ = __webpack_require__(146);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GoogleMapsDirProvider = (function () {
    function GoogleMapsDirProvider(connectivityService) {
        this.connectivityService = connectivityService;
        this.mapInitialised = false;
        this.markers = [];
    }
    GoogleMapsDirProvider.prototype.init = function (mapElement, pleaseConnect, userLon, userLat, optoLon, optoLat) {
        this.userLon = userLon;
        this.userLat = userLat;
        this.optoLon = optoLon;
        this.optoLat = optoLat;
        // console.log("coord in google maps dir = ", userLon, userLat, optoLon, optoLat);
        this.mapElement = mapElement;
        this.pleaseConnect = pleaseConnect;
        return this.loadGoogleMaps();
    };
    GoogleMapsDirProvider.prototype.loadGoogleMaps = function () {
        var _this = this;
        return new Promise(function (resolve) {
            if (typeof google == "undefined" || typeof google.maps == "undefined") {
                console.log("Google maps JavaScript needs to be loaded.");
                _this.disableMap();
                if (_this.connectivityService.isOnline()) {
                    window['mapInit'] = function () {
                        _this.initMap().then(function (values) {
                            resolve(values);
                        });
                        _this.enableMap();
                    };
                    var script = document.createElement("script");
                    script.id = "googleMaps";
                    _this.apiKey = "AIzaSyCNy3fNswCBZ2gX162iYCwPQ8kFkQxqmNI";
                    if (_this.apiKey) {
                        script.src = 'http://maps.googleapis.com/maps/api/js?key=' + _this.apiKey + '&callback=mapInit';
                    }
                    else {
                        script.src = 'http://maps.google.com/maps/api/js?callback=mapInit';
                    }
                    document.body.appendChild(script);
                }
            }
            else {
                if (_this.connectivityService.isOnline()) {
                    _this.initMap();
                    _this.enableMap();
                }
                else {
                    _this.disableMap();
                }
            }
            _this.addConnectivityListeners();
        });
    };
    GoogleMapsDirProvider.prototype.initMap = function () {
        var _this = this;
        this.mapInitialised = true;
        return new Promise(function (resolve) {
            var latLng = new google.maps.LatLng(40.713744, -74.009056);
            var mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            _this.map = new google.maps.Map(_this.mapElement, mapOptions);
            // this.addMarker(position.coords.latitude, position.coords.longitude);
            _this.calculateAndDisplayRoute().then(function (values) {
                _this.directions = values["directions"];
                _this.duration = values["duration"];
                _this.distance = values["distance"];
                // console.log("dir=", values["directions"], values["distance"], values["duration"]);
                resolve(values);
            });
            //
            // Geolocation.getCurrentPosition().then((position) => {
            //
            //   // UNCOMMENT FOR NORMAL USE
            //   let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            //   console.log(latLng)
            //
            // });
        });
    };
    GoogleMapsDirProvider.prototype.disableMap = function () {
        if (this.pleaseConnect) {
            this.pleaseConnect.style.display = "block";
        }
    };
    GoogleMapsDirProvider.prototype.enableMap = function () {
        if (this.pleaseConnect) {
            this.pleaseConnect.style.display = "none";
        }
    };
    GoogleMapsDirProvider.prototype.addConnectivityListeners = function () {
        var _this = this;
        document.addEventListener('online', function () {
            console.log("online");
            setTimeout(function () {
                if (typeof google == "undefined" || typeof google.maps == "undefined") {
                    _this.loadGoogleMaps();
                }
                else {
                    if (!_this.mapInitialised) {
                        _this.initMap();
                    }
                    _this.enableMap();
                }
            }, 2000);
        }, false);
        document.addEventListener('offline', function () {
            console.log("offline");
            _this.disableMap();
        }, false);
    };
    GoogleMapsDirProvider.prototype.addMarker = function (lat, lng) {
        var latLng = new google.maps.LatLng(lat, lng);
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: latLng,
            title: 'You are here',
        });
        this.markers.push(marker);
    };
    GoogleMapsDirProvider.prototype.calculateAndDisplayRoute = function () {
        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
        directionsDisplay.setMap(this.map);
        var myLatLng = {
            lat: this.userLat,
            lng: this.userLon
        };
        var destLatLng = {
            lat: this.optoLat,
            lng: this.optoLon
        };
        return new Promise(function (resolve, reject) {
            directionsService.route({
                origin: myLatLng,
                destination: destLatLng,
                // origin: document.getElementById('start').value,
                // destination: document.getElementById('end').value,
                travelMode: 'DRIVING'
            }, function (response, status) {
                // console.log("response", response);
                this.directions = response.routes[0].legs[0].steps; //instructions
                this.duration = response.routes[0].legs[0].duration.text;
                this.distance = response.routes[0].legs[0].distance.text;
                // console.log(this.directions, this.duration, this.distance);
                if (status === 'OK') {
                    directionsDisplay.setDirections(response);
                    resolve({ "directions": response.routes[0].legs[0].steps, "duration": response.routes[0].legs[0].duration.text, "distance": response.routes[0].legs[0].distance.text });
                }
                else {
                    window.alert('Directions request failed due to ' + status);
                    resolve(false);
                }
            });
        });
    };
    return GoogleMapsDirProvider;
}());
GoogleMapsDirProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__connectivity_connectivity__["a" /* ConnectivityProvider */]])
], GoogleMapsDirProvider);

//# sourceMappingURL=google-mapsDir.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaceDetectionResultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FaceDetectionResultPage = (function () {
    function FaceDetectionResultPage(http, camera, loadingCtrl, alertCtrl, toastCtrl) {
        this.http = http;
        this.camera = camera;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.ROOT_URL = 'https://vision.googleapis.com';
        this.API_KEY = 'AIzaSyDpeXOP8K6Ic0uSjygFArLC8PeGOcURLLo'; // YOUR CLOUD PLATFORM API KEY
        this.visionRequest = {
            "requests": [{
                    "image": {
                        "content": ""
                    },
                    "features": [{
                            "type": "FACE_DETECTION",
                            "maxResults": 10
                        }]
                }]
        };
        this.visionResult = {
            angerLikelihood: null,
            blurredLikelihood: null,
            headwearLikelihood: null,
            joyLikelihood: null,
            sorrowLikelihood: null,
            surpriseLikelihood: null,
            underExposedLikelihood: null,
            detectionConfidence: null,
        };
        this.imageResult = 'https://i.imgur.com/hyRulHk.gif';
    }
    FaceDetectionResultPage.prototype.capture = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        var loader = this.loadingCtrl.create({
            content: "Processing..."
        });
        loader.present(); // show loading component
        this.camera.getPicture(options).then(function (imageData) {
            _this.visionRequest.requests[0].image.content = imageData;
            _this.imageResult = 'data:image/jpeg;base64,' + imageData;
            _this.http.post(_this.ROOT_URL + "/v1/images:annotate?key=" + _this.API_KEY, _this.visionRequest)
                .subscribe(function (data) {
                loader.dismiss(); // hide loading component
                var result = data.responses[0];
                if (Object.keys(result).length === 0) {
                    _this.reset();
                    _this.presentToast('Error processing image.');
                }
                else {
                    var faceAnnotations = result.faceAnnotations[0];
                    // const imagePropertiesAnnotations = result.imagePropertiesAnnotation.dominantColors.colors[0];
                    _this.presentToast('Image successfully processed.');
                    _this.visionResult = {
                        angerLikelihood: faceAnnotations.angerLikelihood,
                        blurredLikelihood: faceAnnotations.blurredLikelihood,
                        headwearLikelihood: faceAnnotations.headwearLikelihood,
                        joyLikelihood: faceAnnotations.joyLikelihood,
                        sorrowLikelihood: faceAnnotations.sorrowLikelihood,
                        surpriseLikelihood: faceAnnotations.surpriseLikelihood,
                        underExposedLikelihood: faceAnnotations.underExposedLikelihood,
                        detectionConfidence: faceAnnotations.detectionConfidence,
                    };
                }
            }, function (err) {
                loader.dismiss(); // hide loading component
                _this.reset();
                _this.showAlert('Vision API Request Error.');
                console.log("error occured");
            });
        }, function (err) {
            loader.dismiss(); // hide loading component
            _this.reset();
            _this.showAlert('Camera Error Occured.');
            console.log(err);
        });
    };
    FaceDetectionResultPage.prototype.showAlert = function (message) {
        var alert = this.alertCtrl.create({
            title: 'Ionic Vision',
            subTitle: message,
            buttons: ['OK'],
            cssClass: 'alertDanger'
        });
        alert.present();
    };
    FaceDetectionResultPage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    FaceDetectionResultPage.prototype.reset = function () {
        this.visionResult = {
            angerLikelihood: null,
            blurredLikelihood: null,
            headwearLikelihood: null,
            joyLikelihood: null,
            sorrowLikelihood: null,
            surpriseLikelihood: null,
            underExposedLikelihood: null,
            detectionConfidence: null,
        };
        this.imageResult = 'https://i.imgur.com/hyRulHk.gif';
    };
    return FaceDetectionResultPage;
}());
FaceDetectionResultPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/pranavarora/Work/ionicApps/dotslash/forsight-master/src/pages/face-detection-result/face-detection-result.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Forsight\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n    <img [src]="imageResult" alt="ion_vision" height="300">\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      Likelihood\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list>\n        <ion-item>\n          <h2>{{ visionResult.detectionConfidence }}</h2>\n          <p>Detection Confidence</p>\n        </ion-item>\n        <ion-item>\n          <h2>{{ visionResult.angerLikelihood }}</h2>\n          <p>Anger</p>\n        </ion-item>\n        <ion-item>\n          <h2>{{ visionResult.blurredLikelihood }}</h2>\n          <p>Blurred</p>\n        </ion-item>\n        <ion-item>\n          <h2>{{ visionResult.headwearLikelihood }}</h2>\n          <p>Headwear</p>\n        </ion-item>\n        <ion-item>\n          <h2>{{ visionResult.joyLikelihood }}</h2>\n          <p>Joy</p>\n        </ion-item>\n        <ion-item>\n          <h2>{{ visionResult.sorrowLikelihood }}</h2>\n          <p>Sorrow</p>\n        </ion-item>\n        <ion-item>\n          <h2>{{ visionResult.surpriseLikelihood }}</h2>\n          <p>Surprise</p>\n        </ion-item>\n        <ion-item>\n          <h2>{{ visionResult.underExposedLikelihood }}</h2>\n          <p>Underexposure</p>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n  <ion-fab right bottom>\n      <button ion-fab color="danger" (click)="capture()"><ion-icon ios="ios-camera" md="md-camera"></ion-icon></button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/pranavarora/Work/ionicApps/dotslash/forsight-master/src/pages/face-detection-result/face-detection-result.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* ToastController */]])
], FaceDetectionResultPage);

//# sourceMappingURL=face-detection-result.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LensRecommenderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
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
 * Generated class for the LensRecommenderPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LensRecommenderPage = (function () {
    function LensRecommenderPage(http, camera, loadingCtrl, alertCtrl, toastCtrl) {
        this.http = http;
        this.camera = camera;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.ROOT_URL = 'https://vision.googleapis.com';
        this.API_KEY = 'AIzaSyBwzIlJsFclNrSOhlneKqkM2km4NgBvxFc'; // YOUR CLOUD PLATFORM API KEY
        this.visionRequest = {
            "requests": [{
                    "image": {
                        "content": ""
                    },
                    "features": [{
                            "type": "IMAGE_PROPERTIES",
                            "maxResults": 10
                        }]
                }]
        };
        this.imageResult = 'https://i.imgur.com/hyRulHk.gif';
    }
    LensRecommenderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LensRecommenderPage');
    };
    LensRecommenderPage.prototype.capture = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        var loader = this.loadingCtrl.create({
            content: "Processing..."
        });
        loader.present(); // show loading component
        this.camera.getPicture(options).then(function (imageData) {
            _this.visionRequest.requests[0].image.content = imageData;
            _this.imageResult = 'data:image/jpeg;base64,' + imageData;
            _this.http.post(_this.ROOT_URL + "/v1/images:annotate?key=" + _this.API_KEY, _this.visionRequest)
                .subscribe(function (data) {
                loader.dismiss(); // hide loading component
                var result = data.responses[0];
                if (Object.keys(result).length === 0) {
                    _this.reset();
                    _this.presentToast('Error processing image.');
                }
                else {
                    var imagePropertiesAnnotations = result.imagePropertiesAnnotation.dominantColors.colors[0];
                    _this.presentToast('Image successfully processed.');
                    _this.dominantColors = imagePropertiesAnnotations.color.red;
                    if (_this.dominantColors < 110) {
                        _this.recommendedLens = 'assets/img/rbw80to110.png';
                    }
                    else if (_this.dominantColors > 110 && _this.dominantColors < 180) {
                        _this.recommendedLens = 'assets/img/rbw100to180.png';
                    }
                    else {
                        _this.recommendedLens = 'assets/img/rgt180.png';
                    }
                }
            }, function (err) {
                loader.dismiss(); // hide loading component
                _this.reset();
                _this.showAlert('Vision API Request Error.');
                console.log("error occured");
            });
        }, function (err) {
            loader.dismiss(); // hide loading component
            _this.reset();
            _this.showAlert('Camera Error Occured.');
            console.log(err);
        });
    };
    LensRecommenderPage.prototype.showAlert = function (message) {
        var alert = this.alertCtrl.create({
            title: 'Ionic Vision',
            subTitle: message,
            buttons: ['OK'],
            cssClass: 'alertDanger'
        });
        alert.present();
    };
    LensRecommenderPage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    LensRecommenderPage.prototype.reset = function () {
        this.dominantColors = null;
        this.imageResult = 'https://i.imgur.com/hyRulHk.gif';
    };
    return LensRecommenderPage;
}());
LensRecommenderPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-lens-recommender',template:/*ion-inline-start:"/Users/pranavarora/Work/ionicApps/dotslash/forsight-master/src/pages/lens-recommender/lens-recommender.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Forsight\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n    <img [src]="imageResult" alt="ion_vision" height="300">\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      Recommended Lens\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list>\n        <ion-item  *ngIf="dominantColors">\n          <img [src]="recommendedLens">\n\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n  <ion-fab right bottom>\n      <button ion-fab color="danger" (click)="capture()"><ion-icon ios="ios-camera" md="md-camera"></ion-icon></button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/pranavarora/Work/ionicApps/dotslash/forsight-master/src/pages/lens-recommender/lens-recommender.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* ToastController */]])
], LensRecommenderPage);

//# sourceMappingURL=lens-recommender.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_facebook__ = __webpack_require__(416);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginPage = (function () {
    function LoginPage(navCtrl, http, storage, fb) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.storage = storage;
        this.fb = fb;
        this.baseUrl = 'http://oapp.delhinerds.com/login/';
        this.errorMsg = null;
    }
    LoginPage.prototype.gotoSignup = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.getCookie = function (name) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length == 2)
            return parts.pop().split(";").shift();
    };
    LoginPage.prototype.setData = function (data, username, password) {
        this.storage.set('username', username);
        this.storage.set('email', data.email);
        this.storage.set('password', password);
        this.storage.set('name', data.name);
        this.storage.set('age', Number(data.age));
        this.storage.set('phone', Number(data.phone));
        this.storage.set('address', data.address);
        this.storage.set('od_sph', Number(data.od_sph));
        this.storage.set('od_cyl', Number(data.od_cyl));
        this.storage.set('od_axis', Number(data.od_va));
        this.storage.set('od_va', Number(data.od_va));
        this.storage.set('os_sph', Number(data.os_sph));
        this.storage.set('os_cyl', Number(data.os_cyl));
        this.storage.set('os_axis', Number(data.os_va));
        this.storage.set('os_va', Number(data.os_va));
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'X-CSRFToken': this.getCookie('csrftoken')
        });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.baseUrl, { username: this.username, password: this.password }, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log("login data=>", data);
            if (data["error"] == false) {
                _this.errorMsg = null;
                _this.setData(data, _this.username, _this.password);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */], {});
            }
            else {
                _this.errorMsg = "Invalid username or password!!!";
            }
        }, function (error) {
            console.log(error);
        });
    };
    LoginPage.prototype.fblogin = function () {
        this.fb.login(['public_profile', 'user_friends', 'email'])
            .then(function (res) { return console.log('Logged into Facebook!', res); })
            .catch(function (e) { return console.log('Error logging into Facebook', e); });
        this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/pranavarora/Work/ionicApps/dotslash/forsight-master/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Welcome to Forsight</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content text-center class="login" padding="true" style="background-color: #EBF5FB;">\n  <img src="assets/logo.png" width="250" style="margin-bottom:15px;" />\n  <h3 style="margin-top:-15px; font-style:italic; color:#029DFA;">search your optometrist</h3><br />\n  <p>Forsight helps you get latest information on eye care and connects you with experienced with optometrists for your primary eye care</p>\n  <br />\n  <br />\n  <ion-list>\n    <ion-item>\n      <ion-label fixed>Username</ion-label>\n      <ion-input type="text" value="" [(ngModel)]="username"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label fixed>Password</ion-label>\n      <ion-input type="password" [(ngModel)]="password"></ion-input>\n    </ion-item>\n  </ion-list>\n  <div padding>\n    <p *ngIf="errorMsg" style="color:red; background-color: white;">{{errorMsg}}</p>\n    <button ion-button color="secondary" block (click)="login()">Log In</button>\n    <button ion-button color="primary" block (click)="gotoSignup()">Signup</button>\n    <h4>OR</h4>\n  </div>\n\n  <div padding style="margin-top:-20px;">\n    <img (click)="fblogin()" src="assets/fb.png" style="width:200px;" />\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/pranavarora/Work/ionicApps/dotslash/forsight-master/src/pages/login/login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_facebook__["a" /* Facebook */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 162:
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
webpackEmptyAsyncContext.id = 162;

/***/ }),

/***/ 205:
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
webpackEmptyAsyncContext.id = 205;

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DetailsPage = (function () {
    function DetailsPage(navCtrl, params) {
        this.navCtrl = navCtrl;
        this.params = params;
        this.item = params.get('item');
    }
    return DetailsPage;
}());
DetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/pranavarora/Work/ionicApps/dotslash/forsight-master/src/pages/details/details.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      {{item.title}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding class="buttons-components-page" style="background-color: #EBF5FB;">\n  <!-- <div class="background-image"></div> -->\n  <ion-card>\n    <ion-item>\n      <img src={{item.photo}} />\n    </ion-item>\n    <ion-card-content>\n      <ion-card-title>\n        {{item.title}}\n      </ion-card-title>\n      <ion-list>\n        <ion-item text-wrap>\n          Author:\n          <ion-note>{{item.author}}</ion-note>\n          <br><br>\n          Subtitle:\n          {{item.subtitle}}\n          <br><br>\n          Content:<p [innerHTML]="item.content"></p>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/pranavarora/Work/ionicApps/dotslash/forsight-master/src/pages/details/details.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], DetailsPage);

//# sourceMappingURL=details.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditUserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditUserPage = (function () {
    function EditUserPage(navCtrl, storage, http) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.http = http;
        this.baseUrl = 'http://oapp.delhinerds.com/editUser/';
        this.getData();
        this.errorMsg = null;
    }
    EditUserPage.prototype.getCookie = function (name) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length == 2)
            return parts.pop().split(";").shift();
    };
    EditUserPage.prototype.setInitData = function () {
        // console.log("set init data");
        this.storage.set('name', 'Arjun Gupta');
        this.storage.set('age', '21');
        this.storage.set('phone', '8860303743');
        this.storage.set('address', '91springboard, Sector-1,Noida');
        this.storage.set('od_sph', '2.0');
        this.storage.set('od_cyl', '0');
        this.storage.set('od_axis', '180');
        this.storage.set('od_va', '6/6');
        this.storage.set('os_sph', '2.0');
        this.storage.set('os_cyl', '0');
        this.storage.set('os_axis', '180');
        this.storage.set('os_va', '6/6');
    };
    EditUserPage.prototype.setData = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'X-CSRFToken': this.getCookie('csrftoken')
        });
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.baseUrl, {
            username: this.username,
            email: this.email,
            password: this.password,
            name: this.name,
            age: this.age,
            phone: this.phone,
            address: this.address,
            od_sph: this.od_sph,
            od_cyl: this.od_cyl,
            od_axis: this.od_axis,
            od_va: this.od_va,
            os_sph: this.os_sph,
            os_cyl: this.os_cyl,
            os_axis: this.os_axis,
            os_va: this.os_va,
        }, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            // console.log("userEdit data=>", data);
            if (data["error"] == false) {
                _this.errorMsg = data["msg"];
                _this.storage.set('name', _this.name);
                _this.storage.set('age', _this.age);
                _this.storage.set('phone', _this.phone);
                _this.storage.set('address', _this.address);
                _this.storage.set('od_sph', _this.od_sph);
                _this.storage.set('od_cyl', _this.od_cyl);
                _this.storage.set('od_va', _this.od_va);
                _this.storage.set('od_axis', _this.od_axis);
                _this.storage.set('os_sph', _this.os_sph);
                _this.storage.set('os_cyl', _this.os_cyl);
                _this.storage.set('os_va', _this.os_va);
                _this.storage.set('os_axis', _this.os_axis);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
            }
            else {
                _this.errorMsg = data["msg"];
            }
        }, function (error) {
            console.log(error);
        });
    };
    EditUserPage.prototype.getData = function () {
        var _this = this;
        // console.log("get data called of editUser");
        this.storage.get('username').then(function (val) {
            if (val == null) {
                return false;
            }
            _this.username = val;
        });
        this.storage.get('password').then(function (val) {
            if (val == null) {
                return false;
            }
            _this.password = val;
        });
        this.storage.get('email').then(function (val) {
            if (val == null) {
                return false;
            }
            _this.email = val;
        });
        this.storage.get('name').then(function (val) {
            if (val == null) {
                return false;
            }
            _this.name = val;
        });
        this.storage.get('age').then(function (val) {
            if (val == null) {
                return false;
            }
            _this.age = val;
        });
        this.storage.get('phone').then(function (val) {
            if (val == null) {
                return false;
            }
            _this.phone = val;
        });
        this.storage.get('address').then(function (val) {
            if (val == null) {
                return false;
            }
            _this.address = val;
        });
        this.storage.get('od_sph').then(function (val) {
            if (val == null) {
                return false;
            }
            _this.od_sph = val;
        });
        this.storage.get('od_cyl').then(function (val) {
            if (val == null) {
                return false;
            }
            _this.od_cyl = val;
        });
        this.storage.get('od_axis').then(function (val) {
            if (val == null) {
                return false;
            }
            _this.od_axis = val;
        });
        this.storage.get('od_va').then(function (val) {
            if (val == null) {
                return false;
            }
            _this.od_va = val;
        });
        this.storage.get('os_sph').then(function (val) {
            if (val == null) {
                return false;
            }
            _this.os_sph = val;
        });
        this.storage.get('os_cyl').then(function (val) {
            if (val == null) {
                return false;
            }
            _this.os_cyl = val;
        });
        this.storage.get('os_axis').then(function (val) {
            if (val == null) {
                return false;
            }
            _this.os_axis = val;
        });
        this.storage.get('os_va').then(function (val) {
            if (val == null) {
                return false;
            }
            _this.os_va = val;
        });
        return true;
    };
    return EditUserPage;
}());
EditUserPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-editUser',template:/*ion-inline-start:"/Users/pranavarora/Work/ionicApps/dotslash/forsight-master/src/pages/user/editUser.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Edit Profile\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content style="background-color: #EBF5FB;">\n  <!-- <div class="background-image"></div> -->\n\n  <ion-list>\n\n    <ion-item>\n      <ion-label fixed>Name:</ion-label>\n      <ion-input type="text" [(ngModel)]="name"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label fixed>Age:</ion-label>\n      <ion-input type="number" [(ngModel)]="age"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label fixed>Phone:</ion-label>\n      <ion-input type="number" [(ngModel)]="phone"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label fixed>Address:</ion-label>\n      <ion-input type="text" [(ngModel)]="address"></ion-input>\n    </ion-item>\n\n    <ion-card-header>Enter your Rx for right eye (OD)</ion-card-header>\n\n    <ion-item>\n      <ion-label fixed>Spherical:</ion-label>\n      <ion-input type="number" value="" [(ngModel)]="od_sph"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label fixed>Cylindrical:</ion-label>\n      <ion-input type="number" value="" [(ngModel)]="od_cyl"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label fixed>Axis:</ion-label>\n      <ion-input type="number" value="" [(ngModel)]="od_axis"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label fixed>Visual Acuity:</ion-label>\n      <ion-input type="number" value="" [(ngModel)]="od_va"></ion-input>\n    </ion-item>\n\n    <ion-card-header>Enter your Rx for left eye (OS)</ion-card-header>\n\n    <ion-item>\n      <ion-label fixed>Spherical:</ion-label>\n      <ion-input type="number" value="" [(ngModel)]="os_sph"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label fixed>Cylindrical:</ion-label>\n      <ion-input type="number" value="" [(ngModel)]="os_cyl"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label fixed>Axis:</ion-label>\n      <ion-input type="number" value="" [(ngModel)]="os_axis"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label fixed>Visual Acuity:</ion-label>\n      <ion-input type="number" value="" [(ngModel)]="os_va"></ion-input>\n    </ion-item>\n\n\n\n  </ion-list>\n\n  <div padding>\n    <button ion-button color="primary" block (click)="setData()">Update Profile</button>\n  </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/pranavarora/Work/ionicApps/dotslash/forsight-master/src/pages/user/editUser.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]])
], EditUserPage);

//# sourceMappingURL=editUser.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OptometristListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__optometrist_optometrist__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OptometristListPage = (function () {
    function OptometristListPage(navCtrl, params) {
        this.navCtrl = navCtrl;
        this.params = params;
        this.optometrists = params.get('optometrists');
        console.log("this.optometrists in list=", this.optometrists);
    }
    OptometristListPage.prototype.select = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__optometrist_optometrist__["a" /* OptometristPage */], {
            'item': item,
        });
    };
    return OptometristListPage;
}());
OptometristListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'optometristList',template:/*ion-inline-start:"/Users/pranavarora/Work/ionicApps/dotslash/forsight-master/src/pages/optometristList/optometristList.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Optometrist List\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="status" style="background-color: #EBF5FB;">\n\n  <ion-card>\n    <ion-list *ngFor="let item of optometrists" (click)="select(item)">\n      <ion-list-header>\n        <h2>{{item.name}}</h2>\n        <br>\n        <p *ngIf="item.workplaceName">• {{ item.workplaceName }}</p>\n        <p *ngIf="item.qualification">• {{ item.qualification }} </p>\n        <p *ngIf="item.workExperience">• {{ item.workExperience }}</p>\n      </ion-list-header>\n    </ion-list>\n  </ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/pranavarora/Work/ionicApps/dotslash/forsight-master/src/pages/optometristList/optometristList.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */]])
], OptometristListPage);

//# sourceMappingURL=optometristList.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleMapsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__connectivity_connectivity__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_native__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_optometrist_service__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GoogleMapsProvider = (function () {
    function GoogleMapsProvider(connectivityService, optometristService) {
        this.connectivityService = connectivityService;
        this.optometristService = optometristService;
        this.mapInitialised = false;
        this.markers = [];
        this.optometrists = [];
        this.workplaces = [];
        // this.initMap();
        // this.enableMap();
    }
    GoogleMapsProvider.prototype.init = function (mapElement, pleaseConnect) {
        this.mapElement = mapElement;
        this.pleaseConnect = pleaseConnect;
        return this.loadGoogleMaps();
    };
    GoogleMapsProvider.prototype.loadGoogleMaps = function () {
        var _this = this;
        return new Promise(function (resolve) {
            if (typeof google == "undefined" || typeof google.maps == "undefined") {
                console.log("Google maps JavaScript needs to be loaded.");
                console.log("here disableMap2");
                _this.disableMap();
                if (_this.connectivityService.isOnline()) {
                    window['mapInit'] = function () {
                        _this.initMap().then(function () {
                            resolve(true);
                        });
                        _this.enableMap();
                    };
                    var script = document.createElement("script");
                    script.id = "googleMaps";
                    _this.apiKey = "AIzaSyCNy3fNswCBZ2gX162iYCwPQ8kFkQxqmNI";
                    if (_this.apiKey) {
                        script.src = 'http://maps.googleapis.com/maps/api/js?key=' + _this.apiKey + '&callback=mapInit';
                    }
                    else {
                        script.src = 'http://maps.googleapis.com/maps/api/js?callback=mapInit';
                    }
                    document.body.appendChild(script);
                }
            }
            else {
                if (_this.connectivityService.isOnline()) {
                    _this.initMap();
                    _this.enableMap();
                }
                else {
                    console.log("here disableMap2");
                    _this.disableMap();
                }
            }
            _this.addConnectivityListeners();
        });
    };
    GoogleMapsProvider.prototype.initMap = function () {
        var _this = this;
        this.mapInitialised = true;
        return new Promise(function (resolve) {
            __WEBPACK_IMPORTED_MODULE_2_ionic_native__["a" /* Geolocation */].getCurrentPosition().then(function (position) {
                // UNCOMMENT FOR NORMAL USE
                var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                //let latLng = new google.maps.LatLng(40.713744, -74.009056);
                var mapOptions = {
                    center: latLng,
                    zoom: 15,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };
                _this.map = new google.maps.Map(_this.mapElement, mapOptions);
                _this.getOptometrists();
                // var image = {
                //   url: "assets/icon/person.png",
                //   size: new google.maps.Size(20, 32),
                //   origin: new google.maps.Point(0, 0),
                //   anchor: new google.maps.Point(0, 32)
                // };
                _this.addMarker(position.coords.latitude, position.coords.longitude, "You are here", "assets/icon/person.png");
                resolve(true);
            });
        });
    };
    GoogleMapsProvider.prototype.disableMap = function () {
        if (this.pleaseConnect) {
            this.pleaseConnect.style.display = "block";
        }
    };
    GoogleMapsProvider.prototype.enableMap = function () {
        if (this.pleaseConnect) {
            this.pleaseConnect.style.display = "none";
        }
    };
    GoogleMapsProvider.prototype.addConnectivityListeners = function () {
        var _this = this;
        document.addEventListener('online', function () {
            console.log("online");
            setTimeout(function () {
                if (typeof google == "undefined" || typeof google.maps == "undefined") {
                    _this.loadGoogleMaps();
                }
                else {
                    if (!_this.mapInitialised) {
                        _this.initMap();
                    }
                    _this.enableMap();
                }
            }, 2000);
        }, false);
        document.addEventListener('offline', function () {
            console.log("offline");
            console.log("here disableMap 3");
            _this.disableMap();
        }, false);
    };
    GoogleMapsProvider.prototype.addMarker = function (lat, lng, title, icon) {
        var latLng = new google.maps.LatLng(lat, lng);
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: latLng,
            title: title,
            label: {
                text: title,
                color: "#eb3a44",
                fontSize: "16px",
                fontWeight: "bold"
            },
            options: {
                icon: {
                    url: icon,
                    scaledSize: new google.maps.Size(34, 34),
                    origin: new google.maps.Point(0, 0),
                    // anchor: new google.maps.Point(0, 0), // anchor
                    anchor: new google.maps.Point(32, 65),
                    labelOrigin: new google.maps.Point(25, 40)
                }
            }
        });
        this.markers.push(marker);
    };
    GoogleMapsProvider.prototype.getOptometrists = function () {
        // this.optometrists = this.optometristService.getOptometrists()
        // for (let each of this.optometrists) {
        //   this.addMarker(Number(each["lat"]), Number(each["lon"]), each["name"], "assets/icon/opto.png");
        // }
        this.workplaces = this.optometristService.getWorkplaces();
        for (var _i = 0, _a = this.workplaces; _i < _a.length; _i++) {
            var each = _a[_i];
            this.addMarker(Number(each["latitutde"]), Number(each["longitude"]), each["workplace_name"], "assets/icon/opto.png");
        }
    };
    return GoogleMapsProvider;
}());
GoogleMapsProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__connectivity_connectivity__["a" /* ConnectivityProvider */],
        __WEBPACK_IMPORTED_MODULE_3__app_services_optometrist_service__["a" /* OptometristService */]])
], GoogleMapsProvider);

//# sourceMappingURL=google-maps.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__map_mapDir__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_list__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DirectionsPage = (function () {
    function DirectionsPage(params, nav) {
        this.nav = nav;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__map_mapDir__["a" /* MapDirPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__list_list__["a" /* ListPage */];
        this.optometrist = params.get('item');
        this.lon = params.get('lon');
        this.lat = params.get('lat');
        this.optoLon = params.get('optoLon');
        this.optoLat = params.get('optoLat');
        this.data = { "optometrist": this.optometrist, "userLon": this.lon, "userLat": this.lat, "optoLon": this.optoLon, "optoLat": this.optoLat };
    }
    return DirectionsPage;
}());
DirectionsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-directions',template:/*ion-inline-start:"/Users/pranavarora/Work/ionicApps/dotslash/forsight-master/src/pages/directions/directions.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Directions\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-tabs color="light">\n  <ion-tab [root]="tab1Root" [rootParams]="data" tabTitle="Map" tabIcon="navigate"></ion-tab>\n  <ion-tab [root]="tab2Root" [rootParams]="data" tabTitle="Directions" tabIcon="list"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/pranavarora/Work/ionicApps/dotslash/forsight-master/src/pages/directions/directions.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */]])
], DirectionsPage);

//# sourceMappingURL=directions.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapDirPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_google_maps_google_mapsDir__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapDirPage = (function () {
    function MapDirPage(navCtrl, maps, platform, params) {
        this.navCtrl = navCtrl;
        this.maps = maps;
        this.platform = platform;
        this.params = params;
        this.data = params.data;
        // console.log("data in mapDir.ts = ", this.data);
        this.userLon = this.data["userLon"];
        this.userLat = this.data["userLat"];
        this.optoLon = Number(this.data["optoLon"]);
        this.optoLat = Number(this.data["optoLat"]);
    }
    MapDirPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.ready().then(function () {
            var mapLoaded = _this.maps.init(_this.mapElement.nativeElement, _this.pleaseConnect.nativeElement, _this.userLon, _this.userLat, _this.optoLon, _this.optoLat);
            Promise.all([
                mapLoaded,
            ]).then(function (result) {
                // for (let location of locations) {
                //   this.maps.addMarker(location.latitude, location.longitude);
                // }
            });
        });
    };
    return MapDirPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], MapDirPage.prototype, "mapElement", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('pleaseConnect'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], MapDirPage.prototype, "pleaseConnect", void 0);
MapDirPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-mapDir',template:/*ion-inline-start:"/Users/pranavarora/Work/ionicApps/dotslash/forsight-master/src/pages/map/mapDir.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Directions\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div #pleaseConnect id="please-connect">\n    <p>Please wait for the map to load.</p>\n  </div>\n  <div #map id="map"></div>\n</ion-content>\n'/*ion-inline-end:"/Users/pranavarora/Work/ionicApps/dotslash/forsight-master/src/pages/map/mapDir.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__providers_google_maps_google_mapsDir__["a" /* GoogleMapsDirProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */]])
], MapDirPage);

//# sourceMappingURL=mapDir.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_google_maps_google_mapsDir__ = __webpack_require__(148);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Locations } from '../../providers/locations/locations';

/**
 * Generated class for the ListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ListPage = (function () {
    function ListPage(navCtrl, maps) {
        this.navCtrl = navCtrl;
        this.maps = maps;
        this.directions = [];
    }
    return ListPage;
}());
ListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"/Users/pranavarora/Work/ionicApps/dotslash/forsight-master/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Directions\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-list-header>\n      <h3>Total Duration: {{maps.duration}}</h3>\n      <h3>Total Distance: {{maps.distance}}</h3>\n    </ion-list-header>\n    <ion-item *ngFor="let item of maps.directions">\n      <ion-avatar item-left>\n        <ion-icon name="pin"></ion-icon>\n      </ion-avatar>\n      <h2 [innerHTML]="item.instructions"></h2>\n      <p [innerHTML]="item.distance.text"></p>\n      <p [innerHTML]="item.duration.text"></p>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/pranavarora/Work/ionicApps/dotslash/forsight-master/src/pages/list/list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_google_maps_google_mapsDir__["a" /* GoogleMapsDirProvider */]])
], ListPage);

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupPage = (function () {
    function SignupPage(navCtrl, http) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.baseUrl = 'http://oapp.delhinerds.com/signup/';
        this.errorMsg = null;
    }
    SignupPage.prototype.isValidUsername = function () {
        return true;
    };
    SignupPage.prototype.isValidPassword = function () {
        return false;
    };
    SignupPage.prototype.gotoLogin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    SignupPage.prototype.getCookie = function (name) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length == 2)
            return parts.pop().split(";").shift();
    };
    SignupPage.prototype.signup = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'X-CSRFToken': this.getCookie('csrftoken')
        });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.baseUrl, {
            username: this.username,
            email: this.email,
            password: this.password,
            name: this.name,
            age: this.age,
            phone: this.phone,
            address: this.address,
            od_sph: this.od_sph,
            od_cyl: this.od_cyl,
            od_axis: this.od_axis,
            od_va: this.od_va,
            os_sph: this.os_sph,
            os_cyl: this.os_cyl,
            os_axis: this.os_axis,
            os_va: this.os_va,
        }, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            // console.log("signup data=>", data);
            if (data["error"] == false) {
                _this.errorMsg = data["msg"];
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */], {});
            }
            else {
                _this.errorMsg = data["msg"];
            }
        }, function (error) {
            console.log(error);
        });
    };
    return SignupPage;
}());
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"/Users/pranavarora/Work/ionicApps/dotslash/forsight-master/src/pages/signup/signup.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Signup</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content text-center class="login" padding="true" style="background-color: #EBF5FB;">\n\n  <ion-list>\n    <ion-item>\n      <ion-label fixed>Username</ion-label>\n      <ion-input type="text" value="" [(ngModel)]="username"></ion-input>\n    </ion-item>\n\n    <p *ngIf="!isValidUsername()" style="color:red; background-color: white;">Username Already Exists!!!</p>\n\n    <ion-item>\n      <ion-label fixed>Email</ion-label>\n      <ion-input type="email" value="" [(ngModel)]="email"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label fixed>Password</ion-label>\n      <ion-input type="password" [(ngModel)]="password"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label fixed>Re-Enter Password</ion-label>\n      <ion-input type="password" [(ngModel)]="repassword"></ion-input>\n    </ion-item>\n\n    <p *ngIf="password != repassword" style="color:red; background-color: white;">Passwords doesn\'t match!!!</p>\n\n    <ion-item>\n      <ion-label fixed>Name</ion-label>\n      <ion-input type="text" value="" [(ngModel)]="name"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label fixed>Age:</ion-label>\n      <ion-input type="number" value="" [(ngModel)]="age"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label fixed>Phone:</ion-label>\n      <ion-input type="number" value="" [(ngModel)]="phone"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label fixed>Address:</ion-label>\n      <ion-input type="text" value="" [(ngModel)]="address"></ion-input>\n    </ion-item>\n\n    <ion-card-header>Enter your Rx for right eye (OD)</ion-card-header>\n\n    <ion-item>\n      <ion-label fixed>Spherical:</ion-label>\n      <ion-input type="number" value="" [(ngModel)]="od_sph"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label fixed>Cylindrical:</ion-label>\n      <ion-input type="number" value="" [(ngModel)]="od_cyl"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label fixed>Axis:</ion-label>\n      <ion-input type="number" value="" [(ngModel)]="od_axis"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label fixed>Visual Acuity:</ion-label>\n      <ion-input type="number" value="" [(ngModel)]="od_va"></ion-input>\n    </ion-item>\n\n    <ion-card-header>Enter your Rx for left eye (OS)</ion-card-header>\n\n    <ion-item>\n      <ion-label fixed>Spherical:</ion-label>\n      <ion-input type="number" value="" [(ngModel)]="os_sph"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label fixed>Cylindrical:</ion-label>\n      <ion-input type="number" value="" [(ngModel)]="os_cyl"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label fixed>Axis:</ion-label>\n      <ion-input type="number" value="" [(ngModel)]="os_axis"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label fixed>Visual Acuity:</ion-label>\n      <ion-input type="number" value="" [(ngModel)]="os_va"></ion-input>\n    </ion-item>\n\n  </ion-list>\n  <div padding>\n    <p>\n      By signing up, you agree to accept our terms and conditions and privacy policy\n    </p>\n    <button ion-button color="primary" block (click)="signup()">Signup</button>\n  </div>\n\n  <a href="#" style="color: blue;" (click)="gotoLogin()">Already have an account? Login.</a>\n\n</ion-content>\n'/*ion-inline-end:"/Users/pranavarora/Work/ionicApps/dotslash/forsight-master/src/pages/signup/signup.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(423);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_email_composer__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_news_news__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_details_details__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_user_user__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_user_editUser__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_optometrist_optometrist__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_face_detection_result_face_detection_result__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_lens_recommender_lens_recommender__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_search_search__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_search_searchBySpec__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_search_searchResult__ = __webpack_require__(734);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_map_map__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_map_mapDir__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_list_list__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_status_bar__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_splash_screen__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_google_maps_google_maps__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_google_maps_google_mapsDir__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_connectivity_connectivity__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_storage__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_network__ = __webpack_require__(736);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__app_services_optometrist_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_camera__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ionic_native_transfer__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_photoUpload_photoUpload__ = __webpack_require__(737);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_optometristList_optometristList__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_directions_directions__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_search_search_pipe__ = __webpack_require__(738);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__ionic_native_launch_navigator__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__ionic_native_facebook__ = __webpack_require__(416);
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_news_news__["a" /* NewsPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_details_details__["a" /* DetailsPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_user_user__["a" /* UserPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_user_editUser__["a" /* EditUserPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_optometrist_optometrist__["a" /* OptometristPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_search_searchBySpec__["a" /* SearchBySpecPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_search_searchResult__["a" /* SearchResultPage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_photoUpload_photoUpload__["a" /* PhotoUploadPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_map_map__["a" /* MapPage */],
            __WEBPACK_IMPORTED_MODULE_35__pages_optometristList_optometristList__["a" /* OptometristListPage */],
            __WEBPACK_IMPORTED_MODULE_36__pages_directions_directions__["a" /* DirectionsPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_face_detection_result_face_detection_result__["a" /* FaceDetectionResultPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_map_mapDir__["a" /* MapDirPage */],
            __WEBPACK_IMPORTED_MODULE_37__pages_search_search_pipe__["a" /* FilterPipe */],
            __WEBPACK_IMPORTED_MODULE_17__pages_lens_recommender_lens_recommender__["a" /* LensRecommenderPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                links: []
            }),
            __WEBPACK_IMPORTED_MODULE_29__ionic_storage__["a" /* IonicStorageModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_news_news__["a" /* NewsPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_details_details__["a" /* DetailsPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_user_user__["a" /* UserPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_user_editUser__["a" /* EditUserPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_optometrist_optometrist__["a" /* OptometristPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_search_searchBySpec__["a" /* SearchBySpecPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_search_searchResult__["a" /* SearchResultPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_map_map__["a" /* MapPage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_photoUpload_photoUpload__["a" /* PhotoUploadPage */],
            __WEBPACK_IMPORTED_MODULE_35__pages_optometristList_optometristList__["a" /* OptometristListPage */],
            __WEBPACK_IMPORTED_MODULE_36__pages_directions_directions__["a" /* DirectionsPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_map_mapDir__["a" /* MapDirPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_face_detection_result_face_detection_result__["a" /* FaceDetectionResultPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_lens_recommender_lens_recommender__["a" /* LensRecommenderPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_39__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_24__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_25__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_26__providers_google_maps_google_maps__["a" /* GoogleMapsProvider */],
            __WEBPACK_IMPORTED_MODULE_27__providers_google_maps_google_mapsDir__["a" /* GoogleMapsDirProvider */],
            __WEBPACK_IMPORTED_MODULE_28__providers_connectivity_connectivity__["a" /* ConnectivityProvider */],
            __WEBPACK_IMPORTED_MODULE_30__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_31__app_services_optometrist_service__["a" /* OptometristService */],
            __WEBPACK_IMPORTED_MODULE_33__ionic_native_transfer__["a" /* Transfer */], __WEBPACK_IMPORTED_MODULE_32__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_24__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_email_composer__["a" /* EmailComposer */],
            __WEBPACK_IMPORTED_MODULE_38__ionic_native_launch_navigator__["a" /* LaunchNavigator */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_news_news__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_search_search__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_search_searchBySpec__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_map_map__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_user_user__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_face_detection_result_face_detection_result__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_lens_recommender_lens_recommender__ = __webpack_require__(150);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















var MyApp = (function () {
    function MyApp(toastCtrl, alertCtrl, loadingCtrl, httpClient, camera, platform, statusBar, splashScreen, http) {
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.httpClient = httpClient;
        this.camera = camera;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.http = http;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        this.baseUrl = 'http://oapp.delhinerds.com/logout/';
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: 'md-home', },
            { title: 'News', component: __WEBPACK_IMPORTED_MODULE_5__pages_news_news__["a" /* NewsPage */], icon: 'md-list-box', },
            { title: 'Name', component: __WEBPACK_IMPORTED_MODULE_6__pages_search_search__["a" /* SearchPage */], icon: 'ios-search-outline', },
            { title: 'Specialisation', component: __WEBPACK_IMPORTED_MODULE_7__pages_search_searchBySpec__["a" /* SearchBySpecPage */], icon: 'ios-eye-outline', },
            { title: 'NearMe', component: __WEBPACK_IMPORTED_MODULE_8__pages_map_map__["a" /* MapPage */], icon: 'ios-locate-outline', },
            { title: 'Profile', component: __WEBPACK_IMPORTED_MODULE_9__pages_user_user__["a" /* UserPage */], icon: 'md-person', },
            { title: 'Logout', component: __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */], icon: 'md-log-out', },
            { title: 'Specs Recommender', component: __WEBPACK_IMPORTED_MODULE_14__pages_face_detection_result_face_detection_result__["a" /* FaceDetectionResultPage */], icon: 'glasses' },
            { title: 'Lens Recommender', component: __WEBPACK_IMPORTED_MODULE_15__pages_lens_recommender_lens_recommender__["a" /* LensRecommenderPage */], icon: 'eye' }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        var _this = this;
        if (page.component == __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */]) {
            return this.http.get(this.baseUrl)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                // console.log("logout data=>", data);
                _this.nav.setRoot(page.component);
            }, function (error) {
                console.log(error);
            });
        }
        else if (page.component == __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]) {
            this.nav.setRoot(page.component);
        }
        else {
            this.nav.push(page.component);
        }
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/pranavarora/Work/ionicApps/dotslash/forsight-master/src/app/app.html"*/'<ion-menu [content]="content" class="app" >\n  <ion-header>\n    <ion-toolbar  color="primary">\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class="app">\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon name={{p.icon}}></ion-icon> {{p.title}}\n      </button>\n\n\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/pranavarora/Work/ionicApps/dotslash/forsight-master/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["a" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_13__angular_http__["b" /* Http */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewsService = (function () {
    function NewsService(http) {
        this.http = http;
        this.baseUrl = 'http://oapp.delhinerds.com/news/';
    }
    NewsService.prototype.getPosts = function () {
        return this.http.get(this.baseUrl)
            .map(function (res) { return res.json(); });
    };
    return NewsService;
}());
NewsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], NewsService);

//# sourceMappingURL=news.service.js.map

/***/ }),

/***/ 734:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchResultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_data_service__ = __webpack_require__(735);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchResultPage = (function () {
    function SearchResultPage(navCtrl, params) {
        this.navCtrl = navCtrl;
        this.params = params;
        this.searchTerm = '';
        this.item = params.get('item');
    }
    return SearchResultPage;
}());
SearchResultPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'searchResult',template:/*ion-inline-start:"/Users/pranavarora/Work/ionicApps/dotslash/forsight-master/src/pages/search/searchResult.html"*/'<ion-header>\n  <ion-navbar color="primary" >\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Search Result\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="status">\n  <div class="background-image"></div>\n  <ion-item><h1>You have searched for => {{item.name}}</h1></ion-item>\n</ion-content>\n'/*ion-inline-end:"/Users/pranavarora/Work/ionicApps/dotslash/forsight-master/src/pages/search/searchResult.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__app_services_data_service__["a" /* Data */]],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], SearchResultPage);

//# sourceMappingURL=searchResult.js.map

/***/ }),

/***/ 735:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Data; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Data = (function () {
    function Data(http) {
        this.http = http;
        this.items = [
            { title: 'one' },
            { title: 'two' },
            { title: 'three' },
            { title: 'four' },
            { title: 'five' },
            { title: 'six' },
            { title: 'hello' },
            { title: 'this' },
            { title: 'is' },
            { title: 'ionic' },
            { title: 'angular' },
            { title: 'hybrid' },
            { title: 'application' },
        ];
    }
    Data.prototype.filterItems = function (searchTerm) {
        return this.items.filter(function (item) {
            return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    };
    return Data;
}());
Data = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], Data);

//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ 737:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoUploadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_transfer__ = __webpack_require__(417);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PhotoUploadPage = (function () {
    function PhotoUploadPage(navCtrl, http, transfer, camera) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.transfer = transfer;
        this.camera = camera;
        this.baseUrl = 'http://oapp.delhinerds.com/photoUpload/';
        this.errorMsg = null;
    }
    PhotoUploadPage.prototype.upload = function () {
        var _this = this;
        var options = {
            quality: 100
        };
        this.camera.getPicture(options).then(function (imageData) {
            var fileTransfer = _this.transfer.create();
            var options1 = {
                fileKey: 'photo',
                fileName: 'name.jpg',
                headers: {}
            };
            fileTransfer.upload(imageData, 
            //  'http://localhost/ionic/upload.php',
            _this.baseUrl, options1)
                .then(function (data) {
                // success
                console.log("data=", data);
                alert("success");
            }, function (err) {
                // error
                alert("error" + JSON.stringify(err));
            });
        });
    };
    return PhotoUploadPage;
}());
PhotoUploadPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-photoUpload',template:/*ion-inline-start:"/Users/pranavarora/Work/ionicApps/dotslash/forsight-master/src/pages/photoUpload/photoUpload.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="home" style="background-color: #EBF5FB;">\n  <button (click)="upload()" ion-button >Take Pic & Upload </button>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/pranavarora/Work/ionicApps/dotslash/forsight-master/src/pages/photoUpload/photoUpload.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_transfer__["a" /* Transfer */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */]])
], PhotoUploadPage);

// pickPicture() {
//   Camera.getPicture({
//     destinationType: Camera.DestinationType.DATA_URL,
//     sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
//     mediaType: Camera.MediaType.PICTURE
//   }).then((imageData) => {
//     // imageData is a base64 encoded string
//     this.photo = "data:image/jpeg;base64," + imageData;
//     console.log("image=",this.photo );
//   }, (err) => {
//     console.log(err);
//   });
// }
//# sourceMappingURL=photoUpload.js.map

/***/ }),

/***/ 738:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (value, keys, term) {
        if (!term)
            return value;
        return (value || []).filter(function (item) { return keys.split(',').some(function (key) { return item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key]); }); });
    };
    return FilterPipe;
}());
FilterPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'search',
    })
], FilterPipe);

//# sourceMappingURL=search.pipe.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__news_news__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_search__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_searchBySpec__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__map_map__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__face_detection_result_face_detection_result__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lens_recommender_lens_recommender__ = __webpack_require__(150);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.news = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__news_news__["a" /* NewsPage */], {});
    };
    HomePage.prototype.profile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__user_user__["a" /* UserPage */]);
    };
    HomePage.prototype.nearMe = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__map_map__["a" /* MapPage */]);
    };
    HomePage.prototype.searchOptoByName = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__search_search__["a" /* SearchPage */]);
    };
    HomePage.prototype.searchOptoBySpec = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__search_searchBySpec__["a" /* SearchBySpecPage */]);
    };
    HomePage.prototype.detectFace = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__face_detection_result_face_detection_result__["a" /* FaceDetectionResultPage */]);
    };
    HomePage.prototype.recommendLens = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__lens_recommender_lens_recommender__["a" /* LensRecommenderPage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/pranavarora/Work/ionicApps/dotslash/forsight-master/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Forsight | Search your optometrist</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="home">\n\n  <!-- <div class="background-image"></div> -->\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 >\n        <ion-card (click)="searchOptoByName()" style="background-color:red;">\n          <h1>Search By Name</h1>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col  col-12>\n        <ion-card (click)="searchOptoBySpec()" style="background-color:blue;">\n          <h1>Search By Specialisation</h1>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col  col-12>\n        <ion-card (click)="nearMe()" style="background-color: brown;">\n          <h1>Optometrists near me</h1>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col  col-12>\n        <ion-card (click)="profile()" style="background-color: purple;">\n          <h1>My Profile</h1>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col  col-12>\n        <ion-card (click)="news()" style="background-color:green;">\n          <h1>News</h1>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col  col-12>\n        <ion-card (click)="detectFace()" style="background-color:red;">\n          <h1>Specs Recommender</h1>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col  col-12>\n        <ion-card (click)="recommendLens()" style="background-color:red;">\n          <h1>Lens Recommender</h1>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/pranavarora/Work/ionicApps/dotslash/forsight-master/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OptometristService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OptometristService = (function () {
    function OptometristService(http) {
        this.http = http;
        this.baseUrl = 'http://oapp.delhinerds.com/optometrist/';
        this.baseUrl2 = 'http://oapp.delhinerds.com/specialisation/';
        this.baseUrl3 = 'http://oapp.delhinerds.com/workplace/';
        this.getOptometristsInit();
        this.getWorkplaceInit();
    }
    OptometristService.prototype.getOptometristsInit = function () {
        var _this = this;
        return this.http.get(this.baseUrl)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.optometrists = data;
        });
    };
    OptometristService.prototype.getWorkplaceInit = function () {
        var _this = this;
        return this.http.get(this.baseUrl3)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.workplaces = data;
        });
    };
    OptometristService.prototype.getOptometrists = function () {
        return this.optometrists;
    };
    OptometristService.prototype.getWorkplaces = function () {
        return this.workplaces;
    };
    OptometristService.prototype.getOptometristsSubs = function () {
        return this.http.get(this.baseUrl)
            .map(function (res) { return res.json(); });
    };
    OptometristService.prototype.filterItemsByName = function (searchTerm) {
        return this.optometrists.filter(function (item) {
            return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    };
    OptometristService.prototype.filterItemsBySpec = function (searchTerm) {
        // console.log("this.optometrists spec service", this.optometrists);
        return this.optometrists.filter(function (item) {
            // console.log("iem spec ayrray = ", item.specialisation);
            for (var i = 0; i < item.specialisation.length; i++) {
                if (item.specialisation[i].title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1)
                    return item;
            }
        });
    };
    OptometristService.prototype.getSpecialisationInit = function () {
        return this.http.get(this.baseUrl2)
            .map(function (res) { return res.json(); });
    };
    return OptometristService;
}());
OptometristService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], OptometristService);

//# sourceMappingURL=optometrist.service.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OptometristPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_email_composer__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_launch_navigator__ = __webpack_require__(277);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OptometristPage = (function () {
    function OptometristPage(launchNavigator, emailComposer, callNumber, navCtrl, params) {
        this.launchNavigator = launchNavigator;
        this.emailComposer = emailComposer;
        this.callNumber = callNumber;
        this.navCtrl = navCtrl;
        this.params = params;
        this.item = params.get('item');
        console.log("item.photo in maps.ts=", this.item.photo);
    }
    OptometristPage.prototype.callIT = function (passedNumber) {
        this.callNumber.callNumber(passedNumber, true)
            .then(function () { return console.log('Launched dialer!'); })
            .catch(function () { return console.log('Error launching dialer'); });
    };
    OptometristPage.prototype.email = function (passedEmail) {
        var email = {
            to: passedEmail,
            isHtml: true
        };
        this.emailComposer.open(email)
            .then(function () { return console.log('Launched Email!'); })
            .catch(function () { return console.log('Error launching Email'); });
    };
    OptometristPage.prototype.navigate = function (location) {
        this.launchNavigator.navigate(location);
    };
    return OptometristPage;
}());
OptometristPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-optometrist',template:/*ion-inline-start:"/Users/pranavarora/Work/ionicApps/dotslash/forsight-master/src/pages/optometrist/optometrist.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Optometrist</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="optometrist">\n  <div id="profile-bg" style="background: url(assets/icon/bg.jpg);">\n    <img id="profile-image" src={{item.photo}}/>\n    <h3 id="profile-name">{{item.name}}</h3>\n  </div>\n  <div id="content">\n    <div id="profile-info">\n      <span id="profile-description">\n          <h1 style="color:black" >Specialisation:</h1>\n          <h4 *ngFor="let spec of item.specialisation">\n            {{ spec.title }}\n          </h4>\n          <h1 style="color:black" >Education and experience</h1>\n          <h4 *ngIf="item.qualification">{{ item.qualification }}</h4>\n          <h4 *ngIf="item.workExperience">{{ item.workExperience }}</h4>\n          <h1 style="color:black" >Workplaces:</h1>\n          <h5 *ngFor="let place of item.workplaceadd">\n            <a (click)="navigate(place)">{{place}}</a>\n          </h5>\n\n          <!-- <a (click)="navigate(item.workplaceAddress)"><h5 *ngIf="item.workplaceAddress">{{ item.workplaceadd }}</h5></a> -->\n          <p style="font-size:10px; color:black;">Click on the address to switch to Google Maps for Navigation</p>\n\n          <h1 style="color:black" >Contact Details:</h1>\n          <h5 *ngIf="item.email">Email: {{ item.email }}\n            <span>\n              <ion-icon name="ios-mail-outline"></ion-icon>\n              <button ionic-button (click)="email(item.email)">Email</button>\n            </span>\n          </h5>\n          <h5 *ngIf="item.contact">Phone: {{ item.contact }}\n            <span>\n              <ion-icon name="ios-call-outline"></ion-icon>\n              <button ionic-button><a href="tel:{{item.contact}}">Call</a></button>\n            </span>\n          </h5>\n          <br><br>\n      </span>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/pranavarora/Work/ionicApps/dotslash/forsight-master/src/pages/optometrist/optometrist.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_launch_navigator__["a" /* LaunchNavigator */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_email_composer__["a" /* EmailComposer */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__["a" /* CallNumber */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], OptometristPage);

//# sourceMappingURL=optometrist.js.map

/***/ })

},[418]);
//# sourceMappingURL=main.js.map