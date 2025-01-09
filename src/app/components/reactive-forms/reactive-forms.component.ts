import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  standalone: false,

  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss',
})
export class ReactiveFormsComponent {
  loginForm: FormGroup;
  /**
   * FormGroup es una clase que va a representar un grupo de controles (cada input que este dentro de mi formulario)
   */

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      rememberMe: [],
    });

    console.log(this.loginForm);
  }

  get emailControl() {
    return this.loginForm.get('email');
  }

  get emailControlIsInvalid() {
    return this.emailControl?.invalid && this.emailControl.touched;
  }

  get emailControlIsValid() {
    return this.emailControl?.valid && this.emailControl.touched;
  }

  get emailErrors() {
    return this.emailControl?.errors;
  }
}
