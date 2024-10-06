import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './pages/login/login.module';
import { RouterOutlet } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MenuModule } from './pages/menu/menu.module';
import { ComponentsModule } from './components/components.module';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { DashboardModule } from './pages/dashboard/dashboard.module';
registerLocaleData(localePt)

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    AppRoutingModule,
    ComponentsModule,
    LoginModule,
    MenuModule,
    DashboardModule
  ],
  providers: [
    provideAnimationsAsync('noop'),
    { provide: LOCALE_ID, useValue: 'pt-BR' } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
