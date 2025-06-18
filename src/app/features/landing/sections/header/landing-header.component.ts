import {Component, inject} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {ButtonComponent, ThemeEnum, ThemeService} from '../../../../shared';
import {SplitButtonComponent} from '../../../../shared/components/button/split-button/split-button.component';
import {SplitButtonItem} from '../../../../shared/components/button/shared';

@Component({
  selector: 'app-landing-header',
  imports: [
    NgOptimizedImage,
    ButtonComponent,
    SplitButtonComponent
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
