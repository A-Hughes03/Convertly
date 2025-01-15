import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dark-mode-toggle',
  templateUrl: './dark-mode-toggle.component.html',
  styleUrls: ['./dark-mode-toggle.component.css']
})
export class DarkModeToggleComponent {
  isDarkMode = true;

  @Output() darkModeSwitched = new EventEmitter<boolean>();

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    this.darkModeSwitched.emit(this.isDarkMode);
    document.body.classList.toggle('dark-mode');
  }
}
