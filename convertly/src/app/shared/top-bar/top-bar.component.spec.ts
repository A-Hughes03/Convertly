import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBarComponent } from './top-bar.component';
import { DarkModeToggleComponent } from './dark-mode-toggle/dark-mode-toggle.component';
import { SocialMediaButtonComponent } from '../social-media-button/social-media-button.component';

describe('TopBarComponent', () => {
  let component: TopBarComponent;
  let fixture: ComponentFixture<TopBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopBarComponent, SocialMediaButtonComponent, DarkModeToggleComponent]
    });
    fixture = TestBed.createComponent(TopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
