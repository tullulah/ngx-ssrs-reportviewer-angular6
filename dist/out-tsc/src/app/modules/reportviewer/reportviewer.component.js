import { Component, Input, Output, ElementRef, EventEmitter, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
var ReportViewerComponent = /** @class */ (function () {
    function ReportViewerComponent(sanitizer, http) {
        this.sanitizer = sanitizer;
        this.http = http;
        this.showparameters = 'false';
        this.language = 'en-us';
        this.width = 100;
        this.height = 100;
        this.toolbar = 'true';
        this.onError = new EventEmitter();
    }
    ReportViewerComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (!this.reporturl) {
            this.onError.emit('Src cannot be null');
        }
        if ('reporturl' in changes) {
            // this.source = this.sanitizer.bypassSecurityTrustResourceUrl(this.buildReportUrl());
            this.get(this.buildReportUrl(), null).subscribe(function (data) { return _this.iframe.nativeElement.src = data; });
        }
    };
    ReportViewerComponent.prototype.createAuthorizationHeader = function () {
        var token = sessionStorage.getItem('access_token');
        return new HttpHeaders()
            .set('Authorization', 'Bearer ' + token)
            .set('X-Origin', 'SomDenWeb').set('Allow-Control-Allow-Origin', '*');
    };
    ReportViewerComponent.prototype.get = function (url, params) {
        return this.http.get(url.replace('{hostname}', window.location.hostname), { params: params, headers: this.createAuthorizationHeader() });
    };
    ReportViewerComponent.prototype.buildParameterString = function () {
        var parameterString = '';
        for (var param in this.parameters) {
            if (param) {
                if (this.parameters[param] instanceof Array === true) {
                    for (var arrayParam in this.parameters[param]) {
                        if (arrayParam) {
                            parameterString += '&' + param + '=' + this.parameters[param][arrayParam];
                        }
                    }
                }
                if (this.parameters[param] != null && this.parameters[param] instanceof Array === false) {
                    parameterString += '&' + param + '=' + this.parameters[param];
                }
                if (this.parameters[param] == null) {
                    parameterString += '&' + param + ':isnull=true';
                }
            }
        }
        return parameterString;
    };
    ReportViewerComponent.prototype.buildReportUrl = function () {
        if (!this.reporturl) {
            return;
        }
        var parameters = this.buildParameterString();
        return this.reportserver + '?/'
            + this.reporturl + '&rs:Embed=true'
            + '&rc:Parameters=' + this.showparameters
            + parameters
            + '&rs:ParameterLanguage=' + this.language + '&rc:Toolbar=' + this.toolbar;
    };
    ReportViewerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ssrs-reportviewer',
                    templateUrl: './reportviewer.component.html',
                    styleUrls: ['./reportviewer.component.css']
                },] },
    ];
    /** @nocollapse */
    ReportViewerComponent.ctorParameters = function () { return [
        { type: DomSanitizer },
        { type: HttpClient }
    ]; };
    ReportViewerComponent.propDecorators = {
        iframe: [{ type: ViewChild, args: ['iframe',] }],
        reporturl: [{ type: Input }],
        reportserver: [{ type: Input }],
        showparameters: [{ type: Input }],
        parameters: [{ type: Input }],
        language: [{ type: Input }],
        width: [{ type: Input }],
        height: [{ type: Input }],
        toolbar: [{ type: Input }],
        onError: [{ type: Output, args: ['error',] }]
    };
    return ReportViewerComponent;
}());
export { ReportViewerComponent };
//# sourceMappingURL=reportviewer.component.js.map