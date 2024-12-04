sap.ui.define([
	"sap/ui/test/Opa5"
], function (Opa5) {
	"use strict";
	var sViewName = "Main";

	const cIdButton = "helloButton";

	Opa5.createPageObjects({
		onTheViewPage: {

			actions: {},

			assertions: {

				iShouldSeeThePageView: function () {
					return this.waitFor({
						id: "page",
						viewName: sViewName,
						success: function () {
							Opa5.assert.ok(true, "The " + sViewName + " view is displayed");
						},
						errorMessage: "Did not find the " + sViewName + " view"
					});
				},

				iShouldFindAButton: function () {
					return this.waitFor({
						viewName: sViewName,
						id: cIdButton,
						success: function (oButton) {
							oButton.$().trigger("press");
							Opa5.assert.ok(oButton.getId(), "Button with ID " + cIdButton + " found");
						},
						errorMessage: "Did not find the hello-Button in view " + sViewName,
						timeout: "3"
					});
				}
			}
		}
	});

});
