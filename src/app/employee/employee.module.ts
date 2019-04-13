import { NgModule } from '@angular/core';
import { EmployeeComponent } from './employee.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { CapitalizePipe } from '../capitalize.pipe';
import { SharedModule } from '../shared/shared.module';
import { EmployeeRouteModule } from '../routes/employee-route/employee-route.module';

@NgModule({
  declarations: [EmployeeComponent,
                EmployeeDetailComponent,
                CapitalizePipe
              ],
  imports: [
    EmployeeRouteModule,
    SharedModule
  ]
})
export class EmployeeModule { }
