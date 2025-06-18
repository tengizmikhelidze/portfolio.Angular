import {Component, inject} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ThemeService} from './shared';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private readonly themeService = inject(ThemeService);

  constructor() {
    this.themeService.setInitialTheme()
  }
}
