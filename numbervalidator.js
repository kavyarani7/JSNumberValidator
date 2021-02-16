const NumberValidator = {
    EMPTY_STRING: '',
    SPACE_STRING: ' ',
    PERIOD: '.',
    VALID_NUMBER: true,
    INVALID_NUMBER: false,
    validateNumber: function (number) {
        try {
            let numberString = number.toString();
            if (numberString === this.EMPTY_STRING || numberString.includes(this.SPACE_STRING) || isNaN(numberString)) {
                return this.INVALID_NUMBER;
            } else {
                return this.VALID_NUMBER;
            }
        } catch (error) {
            return this.INVALID_NUMBER;
        }
    },
    validateInteger: function (number) {
        if (this.validateNumber(number) === this.VALID_NUMBER) {
            if (number.toString().includes(this.PERIOD)) {
                return this.INVALID_NUMBER;
            } else {
                return this.VALID_NUMBER;
            }
        } else {
            return this.INVALID_NUMBER;
        }
    }
};

try {
    module.exports = NumberValidator;
} catch (error) {
}
