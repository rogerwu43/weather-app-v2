import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CurrentWeatherComponent } from './home/components/current-weather/current-weather.component';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        CurrentWeatherComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ],
})
export class AppModule {}
