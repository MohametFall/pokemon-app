"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function strongPasswordValidator() {
    return function (control) {
        var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        var password = control.value;
        var valid = strongRegex.test(password);
        return valid ? null : { 'strongPasswordError': { password: password } };
    };
}
exports.strongPasswordValidator = strongPasswordValidator;
//# sourceMappingURL=strong-password.validator.js.map