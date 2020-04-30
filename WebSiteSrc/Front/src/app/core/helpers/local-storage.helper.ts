import * as CryptoJS from 'crypto-js';
import { environment } from 'environments/environment';
import { Injectable } from '@angular/core';
import { IsNullOrEmpty } from '../functions';

@Injectable()
export class LocaLStorageHelper {

    public ReadDataFromStorage<T>(key: string): T {
        const stringValue = this.ReadStringFromStorage(key);
        if (IsNullOrEmpty(stringValue)) {
            return null;
        }
        return JSON.parse(stringValue) as T;
    }

    public ReadStringFromStorage(key: string): string {
        const receivedValue = localStorage.getItem(key);
        if (IsNullOrEmpty(receivedValue)) {
            return null;
        }
        return CryptoJS.AES.decrypt(receivedValue, environment.secretKey);
    }

    public WriteDataToStorage(key: string, data: any): void {
        this.WriteStringToStorage(key, JSON.stringify(data));
    }

    public WriteStringToStorage(key: string, data: string): void {
        const encryptedValue = CryptoJS.AES.encrypt(data, environment.secretKey);
        localStorage.setItem(key, encryptedValue);
    }
}