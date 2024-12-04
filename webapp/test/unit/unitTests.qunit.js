/* global QUnit */
// https://api.qunitjs.com/config/autostart/
QUnit.config.autostart = false;

sap.ui.require([
	"student00comsaptrainingux402opa/ux402_opa/test/unit/AllTests"
], function (Controller) {
	"use strict";
	QUnit.start();
});