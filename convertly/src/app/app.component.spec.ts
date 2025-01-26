import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { TopBarComponent } from './shared/top-bar/top-bar.component';
import { DarkModeToggleComponent } from './shared/top-bar/dark-mode-toggle/dark-mode-toggle.component';
import { SocialMediaButtonComponent } from './shared/social-media-button/social-media-button.component';
import { FileConverterComponent } from './shared/file-converter/file-converter.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [
      AppComponent,
      HeaderComponent,
      TopBarComponent,
      DarkModeToggleComponent,
      SocialMediaButtonComponent,
      FileConverterComponent
    ],
    imports: [
      MatFormFieldModule,
      MatSelectModule,
      MatIconModule,
      FormsModule,
      BrowserAnimationsModule
    ]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});