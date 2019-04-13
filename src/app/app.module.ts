import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {EmployeeServiceService} from './employee/employee-service.service';
import {HttpClientModule} from '@angular/common/http';
import { WelcomeComponent } from './home/welcome.component';
import { EmployeeModule } from './employee/employee.module';
import { AppRouteModule } from './routes/app-route/app-route.module';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EmployeeModule,
    AppRouteModule
    
  ],
  providers: [EmployeeServiceService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
