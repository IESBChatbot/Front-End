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

  constructor(private alunoOnlineService: AlunoOnlineService, private formBuilder: FormBuilder,) { }
  
  ngOnInit() {

    this.chatbotForm = this.formBuilder.group({
      texto: ['', Validators.required]
    });

    this.enviarMensagem('Oi', true);
  }

  enviarMensagem(texto: string, primeiraConversa: boolean) {

    this.conversa.push({ texto: texto, tulio: false });
  
    let dados = {
      message: texto,
      attributes: {
        matricula: localStorage.getItem("matricula")
      }
    };

    this.alunoOnlineService.enviarMensagem(localStorage.getItem("sessionKey"), dados)
    .subscribe((x: any) => {
      this.chatbotForm.reset();

      this.conversa.push({ texto: x.message, tulio: true });

      let mensagem = x.message.split('\n');
      let texto = mensagem.shift();

      setTimeout(() => {
        this.container = document.getElementById("msgContainer");
        this.container.scrollTop = this.container.scrollHeight;
      }, 100);
    });
  }             
}
