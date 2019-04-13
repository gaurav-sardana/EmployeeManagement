import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmployeeComponent } from 'src/app/employee/employee.component';
import { EmployeeDetailGuard } from 'src/app/employee/employee-detail/employee-detail.guard';
import { EmployeeDetailComponent } from 'src/app/employee/employee-detail/employee-detail.component';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([  
    {path:'employees', component:EmployeeComponent},
    {path : 'employees/:id', canActivate : [EmployeeDetailGuard] ,component : EmployeeDetailComponent}])
  ],
  exports :[RouterModule]
})
export class EmployeeRouteModule { }
