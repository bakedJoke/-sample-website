export const formatCardNumber=(value:string): string=>{
    const maxValue = 19;
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{4})(?=\d)/g, "$1 ");
    value = value.slice(0, maxValue);

    return value;
}
export const expireCard=(value:string)=>{
    
    const maxValue = 7;
    value = value.replace(/\D/g, "");
    const month = Math.min(parseInt(value.slice(0, 2), 10), 12);
    const monthString = month < 10 ? `0${month}` : `${month}`;
    
    if (value.length >= 2) {
        value = monthString + " / " + value.slice(2);
    }
    value = value.slice(0, maxValue);
    
    return value;

}

export const formatCvc = (value: string) => {
    const maxValue = 3;
    // Remove non-numeric characters from the expiration date
    value = value.replace(/\D/g, "");
    value = value.slice(0, maxValue);
    return value;
};

export const formatCustomerNumber = (value: string):string=>{
    const maxValue =12;
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
    value = value.slice(0,maxValue)
    return value;
}