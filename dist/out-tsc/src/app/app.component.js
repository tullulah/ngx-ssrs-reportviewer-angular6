import { Component } from '@angular/core';
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.reportServer = 'http://reportserver/reportserver';
        this.reportUrl = 'Departments/General Reports/SampleWithParameters';
        this.showParameters = 'false'; // true, false, collapsed
        this.parameters = {
            'SampleStringParameter': 'String',
            'SampleBooleanParameter': false,
            'SampleDateTimeParameter': '10/1/2017',
            'SampleIntParameter': 12345,
            'SampleFloatParameter': '123.1234',
            'SampleMultipleStringParameter': ['Parameter1', 'Parameter2']
        };
        this.language = 'en-us';
        this.width = 50;
        this.height = 50;
        this.toolbar = 'false';
        this.error = null;
    }
    AppComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ssrs',
                    templateUrl: './app.component.html',
                    styleUrls: ['./app.component.css']
                },] },
    ];
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map