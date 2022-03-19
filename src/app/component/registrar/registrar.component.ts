import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  
  register: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.register = this.fb.group({
      identificacion: ['', Validators.required],
      nombre: ['', Validators.required],
      nota1:  ['', Validators.required],
      nota2:  ['', Validators.required],
      nota3:  ['', Validators.required],
      promedio: [''],
      estado: ['']
      
    })

    
     
    
   }
    ngOnInit(): void {
     
     
    }
  
  

    calcularPromedio(){
      let nota1 = this.register.get('nota1')?.value;
      let nota2 = this.register.get('nota2')?.value;
      let nota3 = this.register.get('nota3')?.value;

      return (nota1+nota2+nota3)/3

    
    }

    calcularEstado(){
      
      if(this.calcularPromedio()>=3){
          let estadoInput = document.getElementById('estado');
          estadoInput?.setAttribute("style", "background:green; color: black; opacity: 95%;")
          return " Aprobado"
      }else{ if(this.calcularPromedio() >=0 && this.calcularPromedio() <3 ){
        let estadoInput = document.getElementById('estado');
          estadoInput?.setAttribute("style", "background:red; color: white; opacity: 60%;")
          return "Estado: Reprobado"
      } else {
        
        return "Estado :"
      }
       
      }
    }

    registrarUsuario() : void {
      console.log(this.register)
    }
  
    
}
