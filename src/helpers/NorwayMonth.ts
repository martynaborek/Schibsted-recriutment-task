export const NorwayMonth = ['januar', 'februar', 'mars', 'april', 'mai', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'desember']

export function convertNorwayMonthToNumber(month: string): number {
    return NorwayMonth.findIndex((x) => x === month);
}