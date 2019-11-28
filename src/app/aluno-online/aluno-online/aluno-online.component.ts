import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

const ELEMENT_DATA: Array<any> = [
  {nome: 'Sistemas Operacionais', horario: '18:30 - 19:15', sala: 'JA1'},
  {nome: 'Estrutura de Dados', horario: '19:15 - 20:30', sala: 'JA3'},
  {nome: 'Estrutura de Dados', horario: '20:45 - 22:00', sala: 'JA3'}
];

@Component({
  selector: 'app-aluno-online',
  templateUrl: './aluno-online.component.html',
  styleUrls: ['./aluno-online.component.scss']
})
export class AlunoOnlineComponent implements OnInit {

  displayedColumns: string[] = ['nome', 'horario', 'sala'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  showChatbot: boolean = false;
  matricula = localStorage.getItem("matricula");
  
  constructor() { }

  ngOnInit() {
  }

  setLocalStorage() {

    localStorage.setItem('sessionKey', localStorage.getItem("matricula") + Date.parse(new Date().toString()));
  }
}
