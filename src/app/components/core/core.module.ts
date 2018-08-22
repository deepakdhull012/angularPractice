import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { UsersModule } from '../users/users.module';

@NgModule({
  imports: [
    CommonModule,
    UsersModule
  ],
  declarations: [HeaderComponent, FooterComponent, LandingComponent],
  exports : [HeaderComponent,FooterComponent],
  providers: []
})
export class CoreModule { }
