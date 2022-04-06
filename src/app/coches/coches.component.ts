import { Component } from "@angular/core";
import { Coche } from './coche';
import { PeticionesService } from "../services/peticiones.service";

@Component({
    selector: 'coches',
    templateUrl: './coches.component.html',
    providers: [PeticionesService]
})
export class CochesComponent {
    public coche: Coche;
    public coches: Array<Coche>;
    public articulos:any;

    constructor(
        private _peticionesService: PeticionesService
    ) {
        this.coche = new Coche("", 0, "");
        this.coches = [
            new Coche("Seat Panda", 120, "Blanco"),
            new Coche("Renault 19", 75, "Petróleo")
        ];
    }

    ngOnInit() {
        this._peticionesService.getArticulos().subscribe(
            result => {
                this.articulos = result;
                if(!this.articulos){
                    console.log("Error en el servidor"); 
                }
                console.log(result);
            },
            error => {
                var errorMessage = <any>error;
                console.log(errorMessage);
            }
        );


        console.log(this._peticionesService.getPrueba());
    }

    onSubmit() {
        this.coches.push(this.coche);
        this.coche = new Coche("", 0, "");
    }
}