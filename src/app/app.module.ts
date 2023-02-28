import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimengModule } from './common/primeng.module';
import { FontawesomeModule } from './common/fontawesome.module';
import { DexComponent } from './components/dex/dex.component';
import { HeaderComponent } from './components/header/header.component';
import { NoPrimeDexComponent } from './components/no-prime-dex/no-prime-dex.component';

@NgModule({
  declarations: [
    AppComponent,
    DexComponent,
    HeaderComponent,
    NoPrimeDexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    PrimengModule,
    FontawesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
