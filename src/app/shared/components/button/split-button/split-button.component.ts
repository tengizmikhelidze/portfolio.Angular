import {Component, ContentChild, input, output, signal, TemplateRef} from '@angular/core';
import {ButtonSize, ButtonVariant, SplitButtonItem} from '../shared';
import {NgTemplateOutlet} from '@angular/common';
import {ButtonComponent} from '../button';

@Component({
  selector: 'app-split-button',
  imports: [
    NgTemplateOutlet,
    ButtonComponent
  ],
  templateUrl: './split-button.component.html',
  styleUrl: './split-button.component.scss'
})
export class SplitButtonComponent {
  label = input<string>('Button');
  size = input<ButtonSize>('md');
  variant = input<ButtonVariant>("primary");
  disabled = input<boolean>(false);
  items = input.required<SplitButtonItem[]>();

  @ContentChild('labelTemplate', { static: false }) labelTemplate?: TemplateRef<any>;

  dropdownOpen = signal<boolean>(false);

  click = output<void>()
  itemClick = output<SplitButtonItem>()

  toggleDropdown() {
    this.dropdownOpen.update((v) => !v);
  }

  selectItem(item: SplitButtonItem) {
    this.itemClick.emit(item);
    item.action?.();
    this.dropdownOpen.set(false);
  }
}
