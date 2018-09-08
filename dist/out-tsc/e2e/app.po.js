import { browser, by, element } from 'protractor';
var NgxSsrsReportviewerPage = /** @class */ (function () {
    function NgxSsrsReportviewerPage() {
    }
    NgxSsrsReportviewerPage.prototype.navigateTo = function () {
        return browser.get('/');
    };
    NgxSsrsReportviewerPage.prototype.getParagraphText = function () {
        return element(by.css('app-root h1')).getText();
    };
    return NgxSsrsReportviewerPage;
}());
export { NgxSsrsReportviewerPage };
//# sourceMappingURL=app.po.js.map