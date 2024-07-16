export interface cardInfo{
    receiverInfo:Receiver,
    creditCard:creditCard
}
export interface Receiver{
    username:string,
    email:string,
    number:string
}
export interface creditCard{
    cardName:string,
    cardNumber:string,
    cardExpire:string,
    cardCvc:string
}