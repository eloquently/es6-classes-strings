export class StringPlus {
    constructor(initialString) {
        this.str = initialString;
    }
    
    replaceNthChar(n, newChar) {
        let tempStr = "";
        for(let i = 0; i < this.str.length; i++) {
            if(i != n) {
                tempStr = tempStr + this.str[i];
            } else {
                tempStr = tempStr + newChar;
            }
        }
        this.str = tempStr;
    }
    
    reverse() {
        for(let i = 0; i < this.str.length/2; i++) {
            const tempChar = this.str[i];
            this.replaceNthChar(i, this.str[this.str.length - 1 - i]);
            this.replaceNthChar(this.str.length - 1 - i, tempChar);
        }
    }
    
    isPalindrome() {
        this.reverse();
        const reversed = this.str;
        this.reverse();
        if(reversed == this.str) {
            return true;
        } else {
            return false;
        }
    }
}