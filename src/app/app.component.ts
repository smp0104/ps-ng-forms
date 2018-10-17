import { FormPosterService } from './services/form-poster.service';
import { EmpolyeeDetails } from './models/employee.model';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NG Forms';
  languages = ['English', 'Other'];
 model = new EmpolyeeDetails('', '', true, '', 'default');
 hasDefaultValue = false;
constructor(private formPoster: FormPosterService) {}
verifyLanguagevalue(value) {
  if (value === 'default') {
    this.hasDefaultValue = true;
  } else {
    this.hasDefaultValue = false;
  }
}

submitForm(form: NgForm) {
  this.verifyLanguagevalue(this.model.language);
 if (this.hasDefaultValue) { return; }
console.log(this.model);
this.formPoster.postEmpData(this.model)
.subscribe(
  data => console.log('Data', data),
  err => console.log('Error', err)
);
}

}
