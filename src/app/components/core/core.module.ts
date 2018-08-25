import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { UsersModule } from '../users/users.module';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { MegaMenuModule } from 'primeng/megamenu';


@NgModule({
  imports: [
    CommonModule,
    UsersModule,
    MegaMenuModule
  ],
  declarations: [HeaderComponent, FooterComponent, LandingComponent, MenuComponent, HomeComponent],
  exports : [HeaderComponent,FooterComponent],
  providers: []
})
export class CoreModule { }
