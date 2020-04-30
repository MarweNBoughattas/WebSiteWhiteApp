import { SkinStore } from '../stores';
import { Injectable } from '@angular/core';

@Injectable()
export class SkinService {
    private SkinPaths: { [name: string]: string } = {};

    constructor(public SkinStoreInstance: SkinStore) {
        this.SkinPaths['default'] = 'default-style.css';
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
}