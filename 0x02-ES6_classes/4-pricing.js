import Currency from "./3-currency.js";

export default class Pricing {
    constructor (amount, currency){
        this._amount = amount;
        this._currency = currency;
    }

    get amount() {
        return this._amount;
    }
    
    set amount(amount) {
        if (typeof value !== 'number') {
            throw new TypeError('amount must be a number');
        }
        
        this._amount = amount;
    }
    
    get currency() {
        return this._currency;
    }
    
    set currency(currency) {
        if (!(value instanceof Currency)) {
            throw new TypeError('currency must be a Currency');
        }

        this._currency = currency;
    }

    displayFullPrice(){
        return `${this.amount} ${this.currency.name} (${this.currency.code})`
    }

    static convertPrice(amount, conversionRate){
        return amount * conversionRate;
    }
}
