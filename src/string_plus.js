export class StringPlus {
    constructor(initial_string) {
        this.str = initial_string;
    }
    
    reverse() {
        let temp_str = "";
        for(let i = this.str.length - 1; i >= 0; i--) {
            temp_str = `${temp_str}${this.str[i]}`;
        }
        this.str = temp_str;
    }
}