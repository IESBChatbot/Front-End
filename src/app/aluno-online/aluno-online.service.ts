import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlunoOnlineService {

  constructor(private httpClient: HttpClient) { }

  enviarMensagem(session: string, params, tipoChatbot) {
    return tipoChatbot == 1 ? this.httpClient.post(environment.apiDF + session, params) : this.httpClient.post(environment.apiRasa + session, params);
  }
}
