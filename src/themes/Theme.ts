interface Theme {
    [key: string]: string | number;
    name: string;
    neutralColor: string;
    actionColor: string;
    secondaryActionColor: string;
    dangerColor: string;
    warningColor: string;
    successColor: string;
    defaultIntensity: number;
    hoverIntensity: number;
    selectedIntensity: number;
}
export default Theme;
