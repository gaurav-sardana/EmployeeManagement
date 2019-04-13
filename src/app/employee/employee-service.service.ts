import { Injectable } from '@angular/core';
import { IEmployee } from '../IEmployee';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  constructor(private _http: HttpClient) {

  }
  private employeesUrl: string = "data/employees/employees.json";

 
  getEmployees(): Observable<IEmployee[] > {

    return this._http.get<IEmployee[]>(this.employeesUrl).pipe(
      tap(data=> console.log('All Data :'+ JSON.stringify(data))),
      catchError(this.handleErr.bind(this))
    );
  }
  getEmployee(id : number) : Observable<IEmployee>{
    return this.getEmployees().pipe(
      map((employees : IEmployee[]) => employees.find(emp => emp.id === id))
    )
  }
  handleErr(err: HttpErrorResponse) {
    let errMessage = '';
    if (err.error instanceof ErrorEvent) {
      errMessage = `An error occured : ${err.error.message}`;
    } else {
      errMessage = `Server returned code : ${err.status} , error message is : ${err.message}`;
    }
    console.log(errMessage);
    return errMessage;
  }

}
