import { NgModule } from "@angular/core";
import { SkinService } from './services';
import { SkinStore } from './stores';
import { LocaLStorageHelper } from './helpers/local-storage.helper';

@NgModule({
    declarations: [

    ],
    imports: [

    ],
    providers: [
        LocaLStorageHelper,
        SkinService,
        SkinStore
    ],
    exports: [

    ]
})
export class CoreModule {
}