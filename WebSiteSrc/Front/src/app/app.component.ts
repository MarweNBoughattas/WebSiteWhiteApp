import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SkinService } from './core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'website-white-app';
  public ThemeList: string[];
  public SelectedSkin: string;

  constructor(@Inject(DOCUMENT) private document: Document, private skinService: SkinService) {

  }

  ngOnInit(): void {
    this.ThemeList = this.skinService.GetAvailableSkins();
    this.SelectedSkin = this.skinService.SkinStoreInstance.GetSelected();
    this.ChangeTheme(this.SelectedSkin);
  }

  public ChangeTheme(skinName: string): void {
    const skinPath = this.skinService.GetSkinPath(skinName);
    var linkStyleElt = this.document.getElementById('selected-theme') as HTMLLinkElement;

    if (linkStyleElt) {
      linkStyleElt.href = skinPath;
    } else {
      linkStyleElt = this.document.createElement('link') as HTMLLinkElement;
      linkStyleElt.id = 'selected-theme';
      linkStyleElt.href = skinPath;
      const headElt = this.document.getElementsByTagName('head')[0];
      headElt.appendChild(linkStyleElt);
    }
  }
}
