//
/* You may copy+paste this file and use it as it is.
 *
 * If you make changes to your about:config while the program is running, the
 * changes will be overwritten by the user.js when the application restarts.
 *
 * To make lasting changes to preferences, you will have to edit the user.js.
 */

/****************************************************************************
 * BetterZen                                                                *
 * "Ex nihilo nihil fit"                                                    *
 * version: 138                                                             *
 * url: https://github.com/yokoffing/Betterfox                              *
****************************************************************************/

/****************************************************************************
 * SECTION: FASTFOX                                                         *
****************************************************************************/
/** GFX ***/
user_pref("gfx.canvas.accelerated.cache-size", 512);

/** DISK CACHE ***/
user_pref("browser.cache.disk.enable", false);

/** NETWORK ***/
user_pref("network.http.pacing.requests.enabled", false);

/** SPECULATIVE LOADING ***/
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
user_pref("network.prefetch-next", false);
user_pref("network.predictor.enabled", false);
user_pref("network.predictor.enable-prefetch", false);

/****************************************************************************
 * SECTION: SECUREFOX                                                       *
****************************************************************************/
/** TRACKING PROTECTION ***/
// user_pref("browser.contentblocking.category", "strict");
user_pref("browser.download.start_downloads_in_tmp_dir", true);

/** OCSP & CERTS / HPKP ***/
user_pref("security.OCSP.enabled", 0);
user_pref("security.pki.crlite_mode", 2);

/** DISK AVOIDANCE ***/
user_pref("browser.sessionstore.interval", 60000);

/** SHUTDOWN & SANITIZING ***/
user_pref("browser.privatebrowsing.resetPBM.enabled", true);
user_pref("privacy.history.custom", true);

/** SEARCH / URL BAR ***/
user_pref("browser.urlbar.quicksuggest.enabled", false);

/** PASSWORDS ***/
user_pref("signon.formlessCapture.enabled", false);
user_pref("signon.privateBrowsingCapture.enabled", false);
user_pref("network.auth.subresource-http-auth-allow", 1);
user_pref("editor.truncate_user_pastes", false);

/** HEADERS / REFERERS ***/
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);

/** SAFE BROWSING ***/
user_pref("browser.safebrowsing.downloads.remote.enabled", false);

/** MOZILLA ***/
user_pref("permissions.default.desktop-notification", 2);
user_pref("permissions.default.geo", 2);
user_pref("geo.provider.network.url", "https://beacondb.net/v1/geolocate");
user_pref("browser.search.update", false);
user_pref("permissions.manager.defaultsUrl", "");

/****************************************************************************
 * SECTION: PESKYFOX                                                        *
****************************************************************************/
/** MOZILLA UI ***/
user_pref("browser.shell.checkDefaultBrowser", false);

/** NEW TAB PAGE ***/
user_pref("browser.newtabpage.activity-stream.default.sites", "");

/** URL BAR ***/
user_pref("dom.text_fragments.create_text_fragment.enabled", true);

/****************************************************************************
 * START: ZEN-SPECIFIC OVERRIDES                                            *
****************************************************************************/
// Remove the slashes to enable the prefs

// PREF: reduce CPU and GPU use until bug is fixed
// [1] https://github.com/zen-browser/desktop/issues/6302
user_pref("zen.view.experimental-rounded-view", false);

// PREF: re-enable Windows efficiency mode
//user_pref("dom.ipc.processPriorityManager.backgroundUsesEcoQoS", true);

// PREF: disable new tab preload since they are off by default
user_pref("browser.newtab.preload", false);

// PREF: show Enhance Tracking Protection shield in URL bar
// Currently bugged if you click to view what's blocked
//user_pref("zen.urlbar.show-protections-icon", true);

// PREF: Disable the Picture in picture pop-out when changing tabs
//user_pref("media.videocontrols.picture-in-picture.enable-when-switching-tabs.enabled", false);

/****************************************************************************
 * START: MY OVERRIDES                                                      *
****************************************************************************/
// visit https://github.com/yokoffing/Betterfox/wiki/Common-Overrides
// visit https://github.com/yokoffing/Betterfox/wiki/Optional-Hardening
// Enter your personal overrides below this line:


/****************************************************************************
 * SECTION: SMOOTHFOX                                                       *
****************************************************************************/
// Reset Zen's custom scrolling prefs to their Firefox defaults before making changes!
// [1] Zen changes: https://github.com/zen-browser/desktop/blob/3932ec21f5661440c4b20796f90341a6ac725818/src/browser/app/profile/zen-browser.js#L297-L312
// [2] Firefox defaults: https://searchfox.org/mozilla-release/source/modules/libpref/init/StaticPrefList.yaml
// Then apply an example from Smoothfox
// [3] https://github.com/yokoffing/Betterfox/blob/main/Smoothfox.js
// Enter your scrolling overrides below this line:

/* Firefox built-in default values */
user_pref("apz.overscroll.enabled", false);
user_pref("general.smoothScroll", true);
user_pref("general.smoothScroll.msdPhysics.enabled", false);
user_pref("general.smoothScroll.currentVelocityWeighting", "0.25");
user_pref("general.smoothScroll.stopDecelerationWeighting", "0.4");
user_pref("mousewheel.min_line_scroll_amount", 5);
user_pref("general.smoothScroll.mouseWheel.durationMinMS", 50);
user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS", 120);
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant", 1250);
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant", 1000);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS", 12);
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant", 2000);
user_pref("mousewheel.default.delta_multiplier_y", 100);


/*Smoothfox */

// /****************************************************************************************
//  * OPTION: SHARPEN SCROLLING                                                           *
// ****************************************************************************************/
// // credit: https://github.com/black7375/Firefox-UI-Fix
// // only sharpen scrolling
// user_pref("apz.overscroll.enabled", true); // DEFAULT NON-LINUX
// user_pref("general.smoothScroll", true); // DEFAULT
// user_pref("mousewheel.min_line_scroll_amount", 10); // adjust this number to your liking; default=5
// user_pref("general.smoothScroll.mouseWheel.durationMinMS", 80); // default=50
// user_pref("general.smoothScroll.currentVelocityWeighting", "0.15"); // default=.25
// user_pref("general.smoothScroll.stopDecelerationWeighting", "0.6"); // default=.4
// // Firefox Nightly only:
// // [1] https://bugzilla.mozilla.org/show_bug.cgi?id=1846935
// user_pref("general.smoothScroll.msdPhysics.enabled", false); // [FF122+ Nightly]

// /****************************************************************************************
//  * OPTION: INSTANT SCROLLING (SIMPLE ADJUSTMENT)                                       *
// ****************************************************************************************/
// // recommended for 60hz+ displays
// user_pref("apz.overscroll.enabled", true); // DEFAULT NON-LINUX
// user_pref("general.smoothScroll", true); // DEFAULT
// user_pref("mousewheel.default.delta_multiplier_y", 275); // 250-400; adjust this number to your liking
// // Firefox Nightly only:
// // [1] https://bugzilla.mozilla.org/show_bug.cgi?id=1846935
// user_pref("general.smoothScroll.msdPhysics.enabled", false); // [FF122+ Nightly]

// /****************************************************************************************
//  * OPTION: SMOOTH SCROLLING                                                            *
// ****************************************************************************************/
// // recommended for 90hz+ displays
// user_pref("apz.overscroll.enabled", true); // DEFAULT NON-LINUX
// user_pref("general.smoothScroll", true); // DEFAULT
// user_pref("general.smoothScroll.msdPhysics.enabled", true);
// user_pref("mousewheel.default.delta_multiplier_y", 300); // 250-400; adjust this number to your liking

/****************************************************************************************
 * OPTION: NATURAL SMOOTH SCROLLING V3 [MODIFIED]                                      *
****************************************************************************************/
// credit: https://github.com/AveYo/fox/blob/cf56d1194f4e5958169f9cf335cd175daa48d349/Natural%20Smooth%20Scrolling%20for%20user.js
// recommended for 120hz+ displays
// largely matches Chrome flags: Windows Scrolling Personality and Smooth Scrolling
user_pref("apz.overscroll.enabled", true); // DEFAULT NON-LINUX
user_pref("general.smoothScroll", true); // DEFAULT
user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS", 12);
user_pref("general.smoothScroll.msdPhysics.enabled", true);
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant", 600);
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant", 650);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS", 25);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio", "2");
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant", 250);
user_pref("general.smoothScroll.currentVelocityWeighting", "1");
user_pref("general.smoothScroll.stopDecelerationWeighting", "1");
user_pref("mousewheel.default.delta_multiplier_y", 300); // 250-400; adjust this number to your liking
/****************************************************************************
 * END: BETTERFOX                                                           *
****************************************************************************/
