import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

const ELEMENT_DATA: Array<any> = [
  {nome: 'Projeto Integrador 3', horario: '18:30 - 19:15', sala: 'JA1'},
  {nome: 'Inteligência Artificial', horario: '19:15 - 20:30', sala: 'JA3'},
  {nome: 'Inteligência Artificial', horario: '20:45 - 22:00', sala: 'JA3'}
];

@Component({
  selector: 'app-aluno-online',
  templateUrl: './aluno-online.component.html',
  styleUrls: ['./aluno-online.component.scss']
})
export class AlunoOnlineComponent implements OnInit {

  displayedColumns: string[] = ['nome', 'horario', 'sala'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  
  constructor() { }

  ngOnInit() {
  }

}
