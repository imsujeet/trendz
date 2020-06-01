import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './components/news/posts/posts.component';
import { WeatherComponent } from './components/weather/weather.component';
import { WreportComponent } from './components/weather/wreport/wreport.component';
import { NasaComponent } from './components/nasa/nasa.component';
import { ImageComponent } from './components/nasa/image/image.component';
import { CoronaComponent } from './components/corona/corona.component';
import { CreportComponent } from './components/corona/creport/creport.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    NavbarComponent,
    PostsComponent,
    WeatherComponent,
    WreportComponent,
    NasaComponent,
    ImageComponent,
    CoronaComponent,
    CreportComponent,
    HomeComponent,
    NotfoundComponent,
    SpinnerComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
