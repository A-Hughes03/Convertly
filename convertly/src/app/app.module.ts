import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { TopBarComponent } from './shared/top-bar/top-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DarkModeToggleComponent } from './shared/top-bar/dark-mode-toggle/dark-mode-toggle.component';
import { SocialMediaButtonComponent } from './shared/social-media-button/social-media-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopBarComponent,
    DarkModeToggleComponent,
    SocialMediaButtonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
