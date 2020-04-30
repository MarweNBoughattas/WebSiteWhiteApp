export function IsNullOrEmpty<T>(input: T | null): boolean {
    if (typeof input === 'string') {
        return IsNullOrUndefined(input.trim());
    }

    return IsNullOrUndefined(input);
}

export function IsNullOrUndefined<T>(input: T | null | undefined): boolean {
    return input === null || input === undefined || input.toString().toLocaleLowerCase() === 'undefined' || input.toString().toLocaleLowerCase() === 'null';
}
