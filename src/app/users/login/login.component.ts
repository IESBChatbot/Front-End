import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private router: Router,
    private _formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    
    this.form = this._formBuilder.group({
      matricula: ['', Validators.required]
    });
  }

  irParaAlunoOnline() {

    localStorage.clear();
    localStorage.setItem('matricula', this.form.get('matricula').value);
    localStorage.setItem('matKey', this.form.get('matricula').value + Date.parse(new Date().toString()));
    
    this.router.navigate(['/aluno-online']);
  }
}
