export default interface Theme {
    [index: string]: string;

    name: string;
    backgroundColor: string;
    inactiveBackgroundColor: string;
    textColor: string;
    textHighlightColor: string;
    toggleHighlightColor: string;
    toggleInactiveColor: string;
    buttonPrimaryBackgroundColor: string;
    buttonPrimaryBorderColor: string;
    buttonPrimaryTextColor: string;
    buttonPrimaryHoverBackgroundColor: string;
    buttonPrimaryHoverBorderColor: string;
    buttonPrimaryHoverTextColor: string;
    buttonSecondaryBackgroundColor: string;
    buttonSecondaryBorderColor: string;
    buttonSecondaryTextColor: string;
    buttonSecondaryHoverBackgroundColor: string;
    buttonSecondaryHoverBorderColor: string;
    buttonSecondaryHoverTextColor: string;
}
