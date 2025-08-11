import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../services';

@Component({
  selector: 'app-calculadora',
  standalone: false,
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent implements OnInit {
  constructor(private CalculadoraService:CalculadoraService){

  }
  ngOnInit(): void {
    this.CalculadoraService
  }

}
