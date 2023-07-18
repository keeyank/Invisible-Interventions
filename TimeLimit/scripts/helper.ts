export function numToStr(number: number, digits: number): string {
    const numberString = number.toString();
    const padding = digits - numberString.length;
    
    if (padding > 0) {
        return '0'.repeat(padding) + numberString;
    }
    
    return numberString;
}