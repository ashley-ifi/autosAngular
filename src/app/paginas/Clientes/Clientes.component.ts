import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from 'src/app/interfaces/Cliente';
import { Router } from '@angular/router';


@Component({
  selector: 'app-Clientes',
  templateUrl: './Clientes.component.html',
  styleUrls: ['./Clientes.component.css']
})
export class ClientesComponent implements OnInit {

 
  tituloPagina = "Registro del Cliente"; cliente = { nombre: "", password: "", telefono: "", email: "" };
  quiereContacto: boolean = false;
  constructor(private _router: Router,) { }
   ngOnInit(): void {
   }
   goInicio(): void {
   this._router.navigate([ '/inicio' ]);
  }
  


}













