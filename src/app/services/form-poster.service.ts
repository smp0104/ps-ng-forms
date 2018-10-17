import { EmpolyeeDetails } from './../models/employee.model';
import { Http, Headers, RequestOptions, Response  } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FormPosterService {

constructor(private http: Http) { }

private extractData(res: Response) {
  const body = res.json();
  return body.fields || {};
}
private catchError(err: any) {
console.log('error', err);
return Observable.throw(err.statusText);
}
  postEmpData(employee: EmpolyeeDetails): Observable<Response> {
    console.log('Emp Data:', employee);
    const body = JSON.stringify(employee);
    const headers = new Headers({'Content-Type': 'application/json'} );
    const options = new RequestOptions({headers: headers});
    return this.http.post('http://localhost:3333/postemployees', body, options)
     .map(this.extractData)
    .catch(this.catchError);
}
}
