import { SkinStore } from '../stores';
import { Injectable } from '@angular/core';
import { IsNullOrUndefined } from '../functions';

@Injectable()
export class SkinService {
    private SkinPaths: { [name: string]: string } = {};
    private defaultSkinName: string = 'default';

    constructor(public SkinStoreInstance: SkinStore) {
        this.SkinPaths[this.defaultSkinName] = 'default-style.css';
        this.SkinPaths['dark'] = 'dark-style.css';
    }

    public GetAvailableSkins(): string[] {
        return Object.keys(this.SkinPaths);
    }

    public GetSkinPath(skinName: string): string {
        return this.SkinPaths[skinName];
    }

    public SetSelectedSkin(skinName: string): void {
        this.SkinStoreInstance.SetSelected(skinName);
    }

    public GetSelectedSkin(): string {
        var selectedSkin = this.SkinStoreInstance.GetSelected();
        if (IsNullOrUndefined(selectedSkin)) {
            selectedSkin = this.defaultSkinName;
            this.SkinStoreInstance.SetSelected(selectedSkin);
        }
        return selectedSkin;
    }
}