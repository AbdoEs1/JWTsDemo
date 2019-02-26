import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { StorageServiceModule } from 'ngx-webstorage-service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatTableModule, MatInputModule } from '@angular/material'

import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { LoginService} from './services/login.service';


const appRoutes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Register',component: RegisterComponent },
  
  { path: '', redirectTo: "Login", pathMatch: 'full' },
  { path: '**', redirectTo: "Login", pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StorageServiceModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
  ],
  providers: [LoginService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
