import {Component, input} from '@angular/core';
import {ButtonSizeEnum, ButtonTypeEnum, ButtonVariant} from './types/button.type';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [
    NgClass
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  type = input<ButtonTypeEnum>("button");
  size = input<ButtonSizeEnum>('md');
  variant = input<ButtonVariant>("primary");
  disabled = input<boolean>(false);
}
