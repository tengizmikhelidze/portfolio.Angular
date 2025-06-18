import {Component, input} from '@angular/core';
import {NgClass} from '@angular/common';
import {ButtonSize, ButtonType, ButtonVariant} from '../shared';

@Component({
  selector: 'app-button',
  imports: [
    NgClass
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  type = input<ButtonType>("button");
  size = input<ButtonSize>('md');
  variant = input<ButtonVariant>("primary");
  disabled = input<boolean>(false);
}
