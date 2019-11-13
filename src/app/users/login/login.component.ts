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
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    
    this.form = this.formBuilder.group({
      matricula: ['', Validators.required]
    });
  }

  irParaAlunoOnline() {

    localStorage.clear();
    localStorage.setItem('matricula', this.form.get('matricula').value);
    
    this.router.navigate(['/aluno-online']);
  }
}
