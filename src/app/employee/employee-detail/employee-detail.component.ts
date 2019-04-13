import { Component, OnInit } from '@angular/core';
import { IEmployee } from 'src/app/IEmployee';
import{ActivatedRoute,Router} from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  pageTitle : string = "Employee Detail";
  employee : IEmployee;
  errorMessage ="";
  constructor(private route :ActivatedRoute,
              private router : Router,
              private employeeService : EmployeeServiceService) { 
  }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if(param){
      const id = +param;
    this.getEmployee(id);
    }
    
  }
  getEmployee(id: number): any {
    this.employeeService.getEmployee(id).subscribe(
      employee => this.employee = employee,
      error => this.errorMessage = <any>error
    );
  }

    onBack() : void {
      this.router.navigate(['/employees']);
    }
}
