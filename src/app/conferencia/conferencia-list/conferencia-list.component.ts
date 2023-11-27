import { Component, OnInit } from '@angular/core';
import { ConferenciaService } from '../conferencia.service';
import { Conferencia } from '../conferencia';

@Component({
  selector: 'app-conferencia-list',
  templateUrl: './conferencia-list.component.html',
  styleUrls: ['./conferencia-list.component.css']
})
export class ConferenciaListComponent implements OnInit {

  conferencias: Array<Conferencia> = [];

  proximas: number= 0;

  currentDate: Date = new Date();

  selected: boolean = false;
  selectedConferencia!: Conferencia;

  constructor(private conferenciaService: ConferenciaService) { }

  getConferencias():void{
    this.conferenciaService.getConferencias().subscribe((conferencias) => {
      this.conferencias = conferencias;
      this.getProximasConferencias();
    });
  }

  getProximasConferencias():void{
    this.conferencias.forEach(conferencia =>{
      if(new Date(conferencia.starts) > this.currentDate){
        this.proximas += 1;
      }
    })
  }

  onSelected(conferencia: Conferencia):void{
    this.selected=true;
    this.selectedConferencia = conferencia;
  }

  ngOnInit() {
    this.getConferencias();
  }

}
