
export function getDayName(dateStr: string | number | Date, locale: string | string[] | undefined) {
    let date = new Date(dateStr);
    return date.toLocaleDateString(locale, {weekday: 'long'});
}