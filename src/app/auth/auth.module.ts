import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from '../material/material.module';
import { AuthRoutingModule } from './auth-routing.module';



@NgModule({
  declarations: [
    SignUpComponent,
    SignInComponent,
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
