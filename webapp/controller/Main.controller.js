sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
], (Controller, MessageBox) => {
    "use strict";

    return Controller.extend("student00.com.sap.training.ux402.opa.ux402opa.controller.Main", {
        onInit() {
            
        },

        onPress: (oEvent) => {
            MessageBox.show("Button pressed");
        }
    });
});