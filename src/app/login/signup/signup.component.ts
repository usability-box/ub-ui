import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from 'src/app/shared/animations/fadein.animation';
import { FormGroup, AbstractControl, FormControl, Validators } from '@angular/forms';
import { EMAIL_PATTERN } from 'src/app/shared/validators/email.regex.validator';

@Component({
  selector: 'ub-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  animations: [
    fadeInAnimation
  ]
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  static equalsTo(group: AbstractControl): { [key: string]: boolean } {
    const senha = group.get('senha');
    const senhaConfirmacao = group.get('confirmasenha');
    if (!senha || !senhaConfirmacao) {
      return undefined;
    }

    if (senha.value !== senhaConfirmacao.value) {
      return { senhaDiferente: true };
    }
    return undefined;
  }

  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      cpf: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.pattern(EMAIL_PATTERN), Validators.required]),
      usuario: new FormControl('', Validators.required),
      senha: new FormControl('', Validators.required),
      confirmasenha: new FormControl('', {
        updateOn: 'change',
        validators: [Validators.required]
      })
    }, {
      updateOn: 'blur',
      validators: [SignupComponent.equalsTo]
    });
  }

  submitForm() {
    console.log('Formulário enviado');
  }

}
