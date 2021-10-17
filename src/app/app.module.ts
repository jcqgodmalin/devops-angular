import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './route/routing/routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/main/header/header.component';
import { PromoComponent } from './components/main/promo/promo.component';
import { OrderComponent } from './components/main/order/order.component';
import { FooterComponent } from './components/main/footer/footer.component';
import { MenuComponent } from './components/main/order/menu/menu.component';
import { DashboardComponent } from './components/main/order/dashboard/dashboard.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    PromoComponent,
    OrderComponent,
    FooterComponent,
    MenuComponent,
    DashboardComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
