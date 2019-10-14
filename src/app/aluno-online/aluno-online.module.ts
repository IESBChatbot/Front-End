import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunoOnlineComponent } from './aluno-online/aluno-online.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { MatToolbarModule } from '@angular/material';
import { MatMenuModule } from '@angular/material';

@NgModule({
  declarations: [AlunoOnlineComponent, ChatbotComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatMenuModule
  ]
})
export class AlunoOnlineModule { }
