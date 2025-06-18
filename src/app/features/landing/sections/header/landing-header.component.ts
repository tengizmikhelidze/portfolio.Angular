import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {ButtonComponent} from '../../../../shared';
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

  changeThemeToGreen = () => this.changeTheme('green');
  changeThemeToRed = () => this.changeTheme('green');

  changeTheme(palette: string) {
    console.log(`Changing theme to ${palette}`);
  }

  themes: SplitButtonItem[] = [
    {
      label: 'Green',
      action: this.changeThemeToGreen
    },
    {
      label: 'Red',
      action: this.changeThemeToRed
    }
  ]



}
