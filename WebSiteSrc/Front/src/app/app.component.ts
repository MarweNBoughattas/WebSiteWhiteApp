import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'website-white-app';
  private defaultThemePath: string = 'default-style.css';
  private darkThemePath: string = 'dark-style.css';

  constructor(@Inject(DOCUMENT) private document: Document) {
    
  }

  public ChangeTheme(): void {
    const headElt = this.document.getElementsByTagName('head')[0];
    const linkStyleElt = this.document.getElementById('selected-theme') as HTMLLinkElement;

    if (linkStyleElt) {
      linkStyleElt.href = '';
    }
  }
}
