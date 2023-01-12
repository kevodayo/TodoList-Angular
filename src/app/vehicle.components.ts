import { Component } from '@angular/core';

@Component({
    selector: 'vehicle',
    template: `
    <h2></h2>
    <ul>
        <li *ngFor="let vehicle as vehicles">
            {{vehicle}}
        </li>
    </ul>
    <h1>vehicle</h1>
    `
})
export class VehicleComponent{


    vehicles = ["audi", "toyota", "nissan"]

}