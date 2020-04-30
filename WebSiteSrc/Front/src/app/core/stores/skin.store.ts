import { LocaLStorageHelper } from '../helpers/local-storage.helper';
import { BehaviorSubject, Observable } from 'rxjs';
import { Constants } from '../constants';
import { Injectable } from '@angular/core';

@Injectable()
export class SkinStore {

    private _selectedSkin$: BehaviorSubject<string> = new BehaviorSubject<string>(undefined);
    public SelectedSkin$: Observable<string> = this._selectedSkin$;

    constructor(private localStorageHelper: LocaLStorageHelper) {
        const skinAssigned = localStorageHelper.ReadStringFromStorage('theme');
        this._selectedSkin$.next(skinAssigned);
    }

    public GetSelected(): string {
        return this._selectedSkin$.value;
    }

    public SetSelected(skin: string): void {
        this._selectedSkin$.next(skin);
        this.localStorageHelper.WriteStringToStorage(Constants.SkinKey, skin);
    }
}