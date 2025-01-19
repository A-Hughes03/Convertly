import { Component } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
  isDarkMode: boolean = true;

  handleDarkModeChange(isDarkMode: boolean): void {
    this.isDarkMode = isDarkMode;
    console.log('Dark mode:', isDarkMode);
  }
}
