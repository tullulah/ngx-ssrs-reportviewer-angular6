
import { Component } from '@angular/core';

@Component({
  selector: 'app-ssrs',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  reportServer = 'http://reportserver/reportserver';
  reportUrl = 'Departments/General Reports/SampleWithParameters';
  showParameters = 'false'; // true, false, collapsed
  parameters: any = {
    'SampleStringParameter': 'String',
    'SampleBooleanParameter': false,
    'SampleDateTimeParameter': '10/1/2017',
    'SampleIntParameter': 12345,
    'SampleFloatParameter': '123.1234',
    'SampleMultipleStringParameter': ['Parameter1', 'Parameter2']
  };
  language = 'en-us';
  width = 100;
  height = 100;
  toolbar = 'false';
  error = null;
}

