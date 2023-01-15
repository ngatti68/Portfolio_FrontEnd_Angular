import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AcercaDeService } from 'src/app/servicios/acerca-de.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  
  public acerca_de : Acerca_De | undefined;
  public editAcerca_De : Acerca_De | undefined;

  constructor(private acerca_deService : AcercaDeService) { }

  ngOnInit(): void {
    this.getAcerca_De();   
  }

  public getAcerca_De(): void {

    this.acerca_deService.getAcerca_De().subscribe({
      next: (response: Acerca_De) => {
        this.acerca_de=response; 

    },

    error:(error:HttpErrorResponse) => {
      alert(error.message);
    }

    })
  }
}