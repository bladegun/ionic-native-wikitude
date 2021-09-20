import { IonicNativePlugin } from '@ionic-native/core';
/**
 * SDK Build Information.
 */
export interface SDKBuildInformation {
    buildConfiguration: string;
    buildDate: string;
    buildNumber: string;
}
/**
 * Startup Configuration.
 */
export interface StartupConfiguration {
    /**
     * (Optional) Which camera to use for AR.
     */
    camera_position?: 'front' | 'back';
}
/**
 * @name Wikitude
 * @description
 * The first Cordova Plugin providing image recognition, object recognition and location based augmented reality.
 *
 * @usage
 * ```typescript
 * import { Wikitude } from '@ionic-native/wikitude';
 *
 *
 * constructor(private wikitude: Wikitude) { }
 *
 * ...
 *
 * this.wikitude._sdkKey = 'YOUR API KEY';
 *
 * ...
 *
 * this.wikitude.loadARchitectWorld('public/ar.html', [this.wikitude.FeatureImageTracking, this.wikitude.FeatureObjectTracking])
 *   .then((message: any) => console.log(message))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class WikitudeOriginal extends IonicNativePlugin {
    /**
     * SDK key.
     *
     * Set this value before using any plugin functions.
     */
    _sdkKey: string;
    /**
     * GeoAR feature.
     */
    readonly FeatureGeo: string;
    /**
     * Image Tracking feature.
     */
    readonly FeatureImageTracking: string;
    /**
     * Instance Tracking feature.
     */
    readonly FeatureInstantTracking: string;
    /**
     * Object Tracking feature.
     */
    readonly FeatureObjectTracking: string;
    /**
     * Camera position - undefined.
     */
    readonly CameraPositionUndefined: number;
    /**
     * Camera position - front.
     */
    readonly CameraPositionFront: number;
    /**
     * Camera position - back.
     */
    readonly CameraPositionBack: number;
    /**
     * Camera focus range - none.
     */
    readonly CameraFocusRangeNone: number;
    /**
     * Camera focus range - near.
     */
    readonly CameraFocusRangeNear: number;
    /**
     * Camera focus range - far.
     */
    readonly CameraFocusRangeFar: number;
    /**
     * Use this function to check if the current device is capable of running ARchitect Worlds.
     *
     * @param {string[]} requiredFeatures An array of strings describing which features of the Wikitude SDK to test for support.
     * @return {Promise<string>}
     */
    isDeviceSupported(requiredFeatures: string[]): Promise<string>;
    /**
     * Use this function to request access to restricted APIs like the camera, gps or photo library.
     *
     * @param {function} requiredFeatures An array of strings describing which features of the Wikitude SDK are used so that the plugin can request access to those restricted APIs.
     * @return {Promise<any>}
     */
    requestAccess(requiredFeatures: string[]): Promise<any>;
    /**
     * Use this function to load an ARchitect World.
     *
     * @param {String} architectWorldPath The path to a local ARchitect world or to a ARchitect world on a server or your
     *                                    path to an ARchitect world, either on the device or on e.g. your Dropbox.
     * @param {Array} requiredFeatures augmented reality features: a flags mask for enabling/disabling
     *                                 geographic location-based (WikitudePlugin.FeatureGeo) or image recognition-based (WikitudePlugin.FeatureImageTracking) tracking.
     * @param {json object} (optional) startupConfiguration represents the start-up configuration which may look like the following:
     *                      {
     *                        "camera_position": "back"
     *                      }
     * @return {Promise<string>}
     */
    loadARchitectWorld(architectWorldPath: string, requiredFeatures: string[], startupConfiguration?: StartupConfiguration): Promise<string>;
    /**
     * Use this function to stop the Wikitude SDK and to remove it from the screen.
     */
    close(): void;
    /**
     * Use this function to only hide the Wikitude SDK. All location and rendering updates are still active.
     */
    hide(): void;
    /**
     * Use this function to show the Wikitude SDK again if it was hidden before.
     */
    show(): void;
    /**
     * Use this function to call JavaScript which will be executed in the context of the currently loaded ARchitect World.
     *
     * @param {String} js The JavaScript that should be evaluated in the ARchitect View.
     */
    callJavaScript(js: string): void;
    /**
     * Use this function to set a callback which will be invoked when the ARchitect World opens an architectsdk =// url.
     * document.location = "architectsdk =//opendetailpage?id=9";#
     *
     * @param {any} onUrlInvokeCallback A function which will be called when the ARchitect World invokes a call to "document.location = architectsdk =//"
     * @deprecated use setJSONObjectReceivedCallback instead
     */
    setOnUrlInvokeCallback(onUrlInvokeCallback: any): void;
    /**
     * Use this function to set a callback which will be invoked when AR.platform.sendJSONObject is called.
     * e.g.:
     * AR.platform.sendJSONObject({
     *   action: "opendetailpage",
     *   id: 9
     * });
     *
     * @param {function(jsonObject)} onJSONObjectReceived A function which will be called when AR.platform.sendJSONObject is called.
     */
    setJSONObjectReceivedCallback(onJSONObjectReceived: (jsonObject: any) => void): void;
    /**
     * Use this function to inject a location into the Wikitude SDK.
     *
     * @param {number} latitude The latitude which should be simulated
     * @param {number} longitude The longitude which should be simulated
     * @param {number} altitude The altitude which should be simulated
     * @param {number} accuracy The simulated location accuracy
     */
    setLocation(latitude: number, longitude: number, altitude: number, accuracy: number): void;
    /**
     * Use this function to generate a screenshot from the current Wikitude SDK view.
     *
     * @param {boolean} includeWebView Indicates if the ARchitect web view should be included in the generated screenshot or not.
     * @param {string | null} imagePathInBundleorNullForPhotoLibrary If a file path or file name is given, the generated screenshot will be saved in the application bundle. Passing null will save the photo in the device photo library.
     */
    captureScreen(includeWebView: boolean, imagePathInBundleOrNullForPhotoLibrary: string | null): Promise<any>;
    /**
     * Use this function to set a callback that is called every time the Wikitude SDK encounters an internal error or warning.
     * Internal errors can occur at any time and might not be related to any WikitudePlugin function invocation.
     * An error code and message are passed in form of a JSON object.
     *
     * @param {function(jsonObject)} errorHandler function which is called every time the SDK encounters an internal error.
     *
     * NOTE: The errorHandler is currently only called by the Wikitude iOS SDK!
     */
    setErrorHandler(errorHandler: (jsonObject: any) => void): void;
    /**
     * Use this function to set a callback that is called every time the iOS SDK need to calibrate device sensors.
     *
     * @param {function()} startCalibrationHandler function which is called every time the iOS SDK would like to calibrate device sensors.
     *
     * Note: The startCalibrationHandler is currently only called by the Wikitude iOS Cordova Plugin!
     */
    setDeviceSensorsNeedCalibrationHandler(startCalibrationHandler: () => void): void;
    /**
     * Use this function to set a callback that is called every time the iOS SDK finished device sensor calibration.
     *
     * @param {function()} finishedCalibrationHandler function which is called every time the iOS SDK finished calibrating device sensors.
     *
     * Note: The finishedCalibrationHandler is currently only called by the Wikitude iOS Cordova Plugin!
     */
    setDeviceSensorsFinishedCalibrationHandler(finishedCalibrationHandler: () => void): void;
    /**
     * Use this function to set a callback that is called every time the back button is pressed while the Wikitude Cordova Plugin is presented.
     *
     * @param {function()} onBackButtonCallback function which is called every time the Android back button is pressed.
     *
     * Note: The function is only implemented for Android!
     */
    setBackButtonCallback(onBackButtonCallback: () => void): void;
    /**
     * Use this function to get information about the sdk build.
     *
     * @return {Promise<string>} A JSON string. Use JSON.parse() to parse this string into a SDKBuildInformation object.
     */
    getSDKBuildInformation(): Promise<string>;
    /**
     * Use this function to get the version of the sdk.
     *
     * @return {Promise<string>} The version of the sdk.
     */
    getSDKVersion(): Promise<string>;
    /**
     * Use this function to open the application specific system setting view.
     */
    openAppSettings(): void;
    /**
     * Use this function to display an alert with a specific message.
     *
     * @param alertString The message to display in the alert.
     */
    showAlert(alertString: string): void;
    /**
     * This function gets called every time the application did become active.
     */
    onResume(): void;
    /**
     * This function gets called when the application goes back to main.
     */
    onBackButton(): void;
    /**
     * This function gets called every time the application is about to become inactive.
     */
    onPause(): void;
}

export declare const Wikitude: WikitudeOriginal;