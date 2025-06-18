import {Injectable, signal} from '@angular/core';
import {ThemeTypes} from './types';
import {LocalstorageKeys} from '../../localstorage';
import {ThemeEnum} from './enums';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  selectedTheme = signal<ThemeTypes>(ThemeEnum.orange)

  set theme(theme: ThemeTypes) {
    localStorage.setItem(LocalstorageKeys.theme, theme)
  }

  get theme(): ThemeTypes | null {
    return localStorage.getItem(LocalstorageKeys.theme) as ThemeTypes
  }

  setInitialTheme(){
    this.setTheme(this.theme ? this.theme : ThemeEnum.orange);
  }

  setTheme(theme: ThemeTypes){
    console.log(theme)
    document.body.setAttribute(
      'data-theme',
      theme
    );
    this.selectedTheme.set(theme);
    this.theme = this.selectedTheme();
  }
}
