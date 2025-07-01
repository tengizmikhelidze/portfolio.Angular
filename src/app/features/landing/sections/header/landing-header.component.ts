import {Component, inject} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {ButtonComponent, SplitButtonComponent, SplitButtonItem, ThemeEnum, ThemeService} from '../../../../shared';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-landing-header',
  imports: [
    NgOptimizedImage,
    ButtonComponent,
    SplitButtonComponent,
    RouterLink
  ],
  templateUrl: './landing-header.component.html',
  styleUrl: './landing-header.component.scss'
})
export class LandingHeaderComponent {

  private readonly themeService = inject(ThemeService);

  themes: SplitButtonItem[] = [
    {
      label: 'Orange',
      action: () => this.changeTheme(ThemeEnum.orange)
    },
    {
      label: 'Green',
      action: () => this.changeTheme(ThemeEnum.green)
    }
  ]

  changeTheme(palette: ThemeEnum) {
    this.themeService.setTheme(palette)
  }
}
