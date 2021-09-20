'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var Wikitude = /** @class */ (function (_super) {
    tslib.__extends(Wikitude, _super);
    function Wikitude() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Wikitude.prototype.isDeviceSupported = function (requiredFeatures) { return core.cordova(this, "isDeviceSupported", { "callbackOrder": "reverse" }, arguments); };
    Wikitude.prototype.requestAccess = function (requiredFeatures) { return core.cordova(this, "requestAccess", { "callbackOrder": "reverse" }, arguments); };
    Wikitude.prototype.loadARchitectWorld = function (architectWorldPath, requiredFeatures, startupConfiguration) { return core.cordova(this, "loadARchitectWorld", { "callbackOrder": "reverse" }, arguments); };
    Wikitude.prototype.close = function () { return core.cordova(this, "close", { "sync": true }, arguments); };
    Wikitude.prototype.hide = function () { return core.cordova(this, "hide", { "sync": true }, arguments); };
    Wikitude.prototype.show = function () { return core.cordova(this, "show", { "sync": true }, arguments); };
    Wikitude.prototype.callJavaScript = function (js) { return core.cordova(this, "callJavaScript", { "sync": true }, arguments); };
    Wikitude.prototype.setOnUrlInvokeCallback = function (onUrlInvokeCallback) { return core.cordova(this, "setOnUrlInvokeCallback", { "sync": true }, arguments); };
    Wikitude.prototype.setJSONObjectReceivedCallback = function (onJSONObjectReceived) { return core.cordova(this, "setJSONObjectReceivedCallback", { "sync": true }, arguments); };
    Wikitude.prototype.setLocation = function (latitude, longitude, altitude, accuracy) { return core.cordova(this, "setLocation", { "sync": true }, arguments); };
    Wikitude.prototype.captureScreen = function (includeWebView, imagePathInBundleOrNullForPhotoLibrary) { return core.cordova(this, "captureScreen", { "callbackOrder": "reverse" }, arguments); };
    Wikitude.prototype.setErrorHandler = function (errorHandler) { return core.cordova(this, "setErrorHandler", { "sync": true, "platforms": ["iOS"] }, arguments); };
    Wikitude.prototype.setDeviceSensorsNeedCalibrationHandler = function (startCalibrationHandler) { return core.cordova(this, "setDeviceSensorsNeedCalibrationHandler", { "sync": true, "platforms": ["iOS"] }, arguments); };
    Wikitude.prototype.setDeviceSensorsFinishedCalibrationHandler = function (finishedCalibrationHandler) { return core.cordova(this, "setDeviceSensorsFinishedCalibrationHandler", { "sync": true, "platforms": ["iOS"] }, arguments); };
    Wikitude.prototype.setBackButtonCallback = function (onBackButtonCallback) { return core.cordova(this, "setBackButtonCallback", { "sync": true, "platforms": ["Android"] }, arguments); };
    Wikitude.prototype.getSDKBuildInformation = function () { return core.cordova(this, "getSDKBuildInformation", { "callbackOrder": "reverse" }, arguments); };
    Wikitude.prototype.getSDKVersion = function () { return core.cordova(this, "getSDKVersion", { "callbackOrder": "reverse" }, arguments); };
    Wikitude.prototype.openAppSettings = function () { return core.cordova(this, "openAppSettings", { "sync": true }, arguments); };
    Wikitude.prototype.showAlert = function (alertString) { return core.cordova(this, "showAlert", { "sync": true }, arguments); };
    Wikitude.prototype.onResume = function () { return core.cordova(this, "onResume", { "sync": true }, arguments); };
    Wikitude.prototype.onBackButton = function () { return core.cordova(this, "onBackButton", { "sync": true }, arguments); };
    Wikitude.prototype.onPause = function () { return core.cordova(this, "onPause", { "sync": true }, arguments); };
    Object.defineProperty(Wikitude.prototype, "_sdkKey", {
        get: function () { return core.cordovaPropertyGet(this, "_sdkKey"); },
        set: function (value) { core.cordovaPropertySet(this, "_sdkKey", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Wikitude.prototype, "FeatureGeo", {
        get: function () { return core.cordovaPropertyGet(this, "FeatureGeo"); },
        set: function (value) { core.cordovaPropertySet(this, "FeatureGeo", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Wikitude.prototype, "FeatureImageTracking", {
        get: function () { return core.cordovaPropertyGet(this, "FeatureImageTracking"); },
        set: function (value) { core.cordovaPropertySet(this, "FeatureImageTracking", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Wikitude.prototype, "FeatureInstantTracking", {
        get: function () { return core.cordovaPropertyGet(this, "FeatureInstantTracking"); },
        set: function (value) { core.cordovaPropertySet(this, "FeatureInstantTracking", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Wikitude.prototype, "FeatureObjectTracking", {
        get: function () { return core.cordovaPropertyGet(this, "FeatureObjectTracking"); },
        set: function (value) { core.cordovaPropertySet(this, "FeatureObjectTracking", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Wikitude.prototype, "CameraPositionUndefined", {
        get: function () { return core.cordovaPropertyGet(this, "CameraPositionUndefined"); },
        set: function (value) { core.cordovaPropertySet(this, "CameraPositionUndefined", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Wikitude.prototype, "CameraPositionFront", {
        get: function () { return core.cordovaPropertyGet(this, "CameraPositionFront"); },
        set: function (value) { core.cordovaPropertySet(this, "CameraPositionFront", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Wikitude.prototype, "CameraPositionBack", {
        get: function () { return core.cordovaPropertyGet(this, "CameraPositionBack"); },
        set: function (value) { core.cordovaPropertySet(this, "CameraPositionBack", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Wikitude.prototype, "CameraFocusRangeNone", {
        get: function () { return core.cordovaPropertyGet(this, "CameraFocusRangeNone"); },
        set: function (value) { core.cordovaPropertySet(this, "CameraFocusRangeNone", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Wikitude.prototype, "CameraFocusRangeNear", {
        get: function () { return core.cordovaPropertyGet(this, "CameraFocusRangeNear"); },
        set: function (value) { core.cordovaPropertySet(this, "CameraFocusRangeNear", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Wikitude.prototype, "CameraFocusRangeFar", {
        get: function () { return core.cordovaPropertyGet(this, "CameraFocusRangeFar"); },
        set: function (value) { core.cordovaPropertySet(this, "CameraFocusRangeFar", value); },
        enumerable: false,
        configurable: true
    });
    Wikitude.pluginName = "Wikitude";
    Wikitude.plugin = "com.wikitude.phonegap.wikitudeplugin";
    Wikitude.pluginRef = "WikitudePlugin";
    Wikitude.repo = "https://github.com/Wikitude/wikitude-cordova-plugin";
    Wikitude.platforms = ["Android", "iOS"];
    Wikitude.decorators = [
        { type: core$1.Injectable }
    ];
    return Wikitude;
}(core.IonicNativePlugin));

exports.Wikitude = Wikitude;
