import {Component, inject} from '@angular/core';
import {ButtonComponent, SplitButtonComponent, SplitButtonItem} from "../../design-system";
import {NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";
import {ThemeEnum, ThemeService} from '../../services';

@Component({
  selector: 'app-header',
    imports: [
        ButtonComponent,
        NgOptimizedImage,
        RouterLink,
        SplitButtonComponent
    ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
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
