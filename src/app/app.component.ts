import { EmpolyeeDetails } from './models/employee.model';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NG Forms';
  languages = ['English', 'Other'];
 model = new EmpolyeeDetails('Mani', 'SMP', true, 'Ch', 'default');
 hasDefaultValue = false;

verifyLanguagevalue(value) {
  if (value === 'default') {
    this.hasDefaultValue = true;
  } else {
    this.hasDefaultValue = false;
  }
}
}
