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

  constructor(private conferenciaService: ConferenciaService) { }

  getConferencias():void{
    this.conferenciaService.getConferencias().subscribe((conferencias) => {
      this.conferencias = conferencias;
    });
  }

  getProximasConferencias():void{
    this.conferencias.forEach(conferencia =>{
      if(conferencia.starts > this.currentDate){
        this.proximas += 1;
      }
    })
  }

  ngOnInit() {
    this.getConferencias();
    this.getProximasConferencias();
  }

}
