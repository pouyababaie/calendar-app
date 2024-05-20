export function EnumToArray(enumm: any) {
    const StringIsNumber = (value: any) => isNaN(Number(value)) === false;
    return Object.keys(enumm)
        .filter(StringIsNumber)
        .map(key => enumm[key])
        .reverse();
}