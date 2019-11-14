import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AlunoOnlineService } from '../aluno-online.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})
export class ChatbotComponent implements OnInit {

  chatbotForm: FormGroup;
  conversa: any[] = [];
  container: any;
  matricula: string = localStorage.getItem("matricula");
  carregamento: boolean = false;

  constructor(private alunoOnlineService: AlunoOnlineService, private formBuilder: FormBuilder,) { }
  
  ngOnInit() {
    
    this.chatbotForm = this.formBuilder.group({
      texto: [{value: '', disabled: this.carregamento}]
    });

    this.enviarMensagem('Oi');
  }

  enviarMensagem(texto: string) {

    if(texto) {
      this.conversa.push({ texto: texto, tulio: false });
      this.carregamento = true;
    
      let dados = {
        message: texto,
        attributes: {
          matricula: localStorage.getItem("matricula")
        }
      };
  
      this.chatbotForm.controls['texto'].setValue('Carregando...');
  
      this.alunoOnlineService.enviarMensagem(localStorage.getItem("sessionKey"), dados)
      .subscribe((x: any) => {
        this.chatbotForm.controls['texto'].setValue('');
        this.carregamento = false;
  
        let mensagem = x.message.includes('\n') ? x.message.split('\n') : [];
  
        let texto = mensagem.length > 0 ? mensagem.shift() : x.message;
        this.conversa.push({ texto: texto, tulio: true, lista: mensagem });
  
        setTimeout(() => {
          this.container = document.getElementById("msgContainer");
          this.container.scrollTop = this.container.scrollHeight;
        }, 100);
      });
    }
  }             
}
