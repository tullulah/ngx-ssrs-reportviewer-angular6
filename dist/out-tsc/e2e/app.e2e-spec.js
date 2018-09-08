import { NgxSsrsReportviewerPage } from './app.po';
describe('ngx-ssrs-reportviewer App', function () {
    var page;
    beforeEach(function () {
        page = new NgxSsrsReportviewerPage();
    });
    it('should display welcome message', function () {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('Welcome to app!');
    });
});
//# sourceMappingURL=app.e2e-spec.js.map