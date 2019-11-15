"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var strong_password_validator_1 = require("./strong-password.validator");
var PokemonLoginComponent = (function () {
    function PokemonLoginComponent(fb) {
        this.fb = fb;
    }
    PokemonLoginComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            name: this.fb.group({
                firstname: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(3), forms_1.Validators.maxLength(25)])],
                lastname: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(3), forms_1.Validators.maxLength(25)])]
            }),
            email: ['', forms_1.Validators.pattern('^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$')],
            verification: this.fb.group({
                password: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(8)])],
                passwordConfirm: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(8)])]
            }, [strong_password_validator_1.strongPasswordValidator])
        });
        var person = {
            name: {
                firstname: 'Mohamet',
                lastname: 'DAUDET'
            },
            email: 'mohamet.daudet@gmail.com',
            verification: {
                password: '17Pass_Word$',
                passwordConfirm: '17Pass_Word$'
            }
        };
        this.form.setValue(person);
    };
    PokemonLoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            template: "\n            <form [formGroup]=\"form\" novalidate\n              (ngSubmit)=\"save(myForm.value,myForm.valid)\">\n              <div formGroupName=\"name\">\n                <input formControlName=\"firstname\" placeHolder=\"First Name\">\n                <input formControlName=\"lastname\" placeHolder=\"Last Name\">\n              </div>\n              <input formControlName=\"email\" placeHolder=\"Email\">\n              <div formGroupName=\"verification\">\n                <input formControlName=\"password\" placeHolder=\"Password\">\n                <input formControlName=\"passwordConfirm\" placeHolder=\"PassWord Confirmation\">\n              </div>\n              <button>Submit</button>\n            </form>\n            <p>Value : {{form.value | json}}</p>\n            <p>Validation Status : {{form.status}}</p>\n            "
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder])
    ], PokemonLoginComponent);
    return PokemonLoginComponent;
}());
exports.PokemonLoginComponent = PokemonLoginComponent;
//# sourceMappingURL=pokemon-login.component.js.map