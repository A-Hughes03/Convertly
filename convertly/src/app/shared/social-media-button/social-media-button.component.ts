import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-media-button',
  templateUrl: './social-media-button.component.html',
  styleUrls: ['./social-media-button.component.css']
})
export class SocialMediaButtonComponent {
  @Input() isDarkMode: boolean = true;

  navigateToSocialMedia() {
    window.open('https://github.com/A-Hughes03/Convertly')
  }

  get socialMediaIcon(): string {
    return this.isDarkMode ? 'dark-mode-github-clear-logo' : 'github-logo-clear';
  }
}
