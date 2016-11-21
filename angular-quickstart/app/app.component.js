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
/**
 * Created by phong.tran.nam on 21/11/2016.
 */
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
        this.heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
        this.myHero = this.heroes[0];
    }
    AppComponent.prototype.addHero = function (parameters) {
        var newHero = parameters.newHero;
        if (newHero) {
            this.heroes.push(newHero);
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <h1>{{title}}</h1>\n        <h2>My favorite hero is: {{myHero}}</h2>\n        <p>Heroes:</p>\n        <ul>\n            <li *ngFor=\"let hero of heroes\">\n            {{hero}}\n            </li>\n        </ul>\n        <input #newHero\n            (keyup.enter)=\"addHero({newHero : newHero.value}); newHero.value=''\"\n            (blur)=\"addHero({newHero : newHero.value}); newHero.value=''\"/>\n         <button (click)=\"addHero({newHero : newHero.value})\">Add</button>\n        "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map