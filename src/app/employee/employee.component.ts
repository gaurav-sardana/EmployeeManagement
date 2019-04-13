import { Component, OnInit, Input } from '@angular/core';
import {IEmployee} from '../IEmployee';
import { stringify } from '@angular/compiler/src/util';
import {EmployeeServiceService} from './employee-service.service'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  title : string = 'Employee List';
  showImage : boolean =false;
  imageWidth : number = 100;
  imageMargin : number =2;
  
  _listFilter : string;
  errorMessage: any;

  get listFilter() : string{
    return this._listFilter;
  };
  set listFilter(value : string) {
    this._listFilter = value;
    this.filteredEmployees = this.listFilter ? this.performFilter(this.listFilter ):  this.employees;
  }

  filteredEmployees : IEmployee[];
  employees : IEmployee[] =[];
  constructor(private employeeService : EmployeeServiceService) {
   }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(
      //employees=> this._gotEmp(employees),
      employees => {
        this.employees =employees;
        this.filteredEmployees = this.employees;
      },
      error => this.errorMessage = <any>error );
  }
  _gotEmp(emp:IEmployee[]){
    this.employees =emp;
     this.filteredEmployees = this.employees;
  }
  imgBtnClick() : void {
      this.showImage = !this.showImage;
  }
  performFilter(filterBy : string) : IEmployee[] {
    filterBy=filterBy.toLocaleLowerCase();
    return this.employees.filter((employee : IEmployee)=>
        employee.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
  onRecievedStar(message : string) : void{
    this.title ='Employee List : '+message; 
  }

}
