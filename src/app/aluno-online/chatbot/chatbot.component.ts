import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { AlunoOnlineService } from '../aluno-online.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})
export class ChatbotComponent implements OnInit {

  @Input() tipoChatbot: number;

  chatbotForm: FormGroup;
  conversa: any[] = [];
  container: any;
  matricula: string = localStorage.getItem("matricula");
  carregamento: boolean = false;

  constructor(private alunoOnlineService: AlunoOnlineService, private formBuilder: FormBuilder, ) { }

  ngOnInit() {

    this.chatbotForm = this.formBuilder.group({
      texto: [{ value: '', disabled: this.carregamento }]
    });

    this.enviarMensagem('Oi', true, true);
  }

  enviarMensagem(texto: string, mostrarMsg: boolean, primeiroOi: boolean) {

    this.chatbotForm.controls['texto'].setValue('');

    if (texto) {
      if (mostrarMsg) {
        this.conversa.push({ texto: texto, tulio: false });

        if (primeiroOi) {
          this.conversa.push({ texto: 'Olá, me chamo Túlio! Será um prazer te ajudar!', tulio: true, lista: [] });
        }
      }

      setTimeout(() => {
        this.container = document.getElementById("msgContainer");
        this.container.scrollTop = this.container.scrollHeight;
      }, 100);

      this.carregamento = true;

      let dados = {
        message: texto,
        attributes: {
          matricula: localStorage.getItem("matricula")
        }
      };

      this.conversa.push({ texto: 'Carregando...', tulio: true, lista: [] });
      this.chatbotForm.controls['texto'].disable();

      this.alunoOnlineService.enviarMensagem(localStorage.getItem("sessionKey"), dados, this.tipoChatbot)
        .subscribe((x: any) => {
          this.conversa.pop();
          this.chatbotForm.controls['texto'].enable();
          this.carregamento = false;

          let mensagem = x.message.includes('\n') ? x.message.split('\n') : [];

          let texto = mensagem.length > 0 ? mensagem.shift() : x.message;
          this.conversa.push({ texto: texto, tulio: true, lista: mensagem });

          setTimeout(() => {
            this.container = document.getElementById("msgContainer");
            this.container.scrollTop = this.container.scrollHeight;
          }, 100);

          if (x.flow) {
            localStorage.setItem('sessionKey', localStorage.getItem("matricula") + Date.parse(new Date().toString()));
            this.enviarMensagem('Oi', false, false);
          }
        });
    }
  }

}
