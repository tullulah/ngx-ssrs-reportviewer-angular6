import { TestBed, async } from '@angular/core/testing';
import { SSRSReportViewerModule } from './modules/reportviewer/reportviewer.module';
import { AppComponent } from './app.component';
describe('AppComponent', function () {
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            imports: [
                SSRSReportViewerModule
            ],
            declarations: [
                AppComponent
            ],
        }).compileComponents();
    }));
    it('Sample app created', async(function () {
        var fixture = TestBed.createComponent(AppComponent);
        var app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
//# sourceMappingURL=app.component.spec.js.map