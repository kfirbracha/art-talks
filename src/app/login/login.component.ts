import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { GlobalErrorComponent } from '../shared/components/global-error/global-error.component';
import { ApiService } from '../shared/services/api-service/api.service';
import {
  SessionKeys,
  SessionServiceService,
} from '../shared/services/session-service/session-service.service';

enum titleEnum {
  login = 'login',
  register = 'register',
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = this.fb.group({
    userName: [null, Validators.required],
    password: [null, Validators.required],
    isLogin: [true, Validators.required],
  });
  constructor(
    private apiService: ApiService,
    private fb: FormBuilder,
    private sessionService: SessionServiceService,
    private router: Router,
    private dialog: MatDialog
  ) {}
  loginError: boolean = false;
  title!: titleEnum;
  toggleSlider!: titleEnum;
  ngOnInit(): void {
    this.title = titleEnum.login;
    this.toggleSlider = titleEnum.register;
  }

  submitForm() {
    if (this.loginForm.valid) {
      if (this.loginForm.controls['isLogin'].value) {
        this.apiService.login(this.loginForm.value).subscribe((res) => {
          if (!res) {
            return (this.loginError = true);
          }
          this.sessionService.setSession(SessionKeys.user, res);
          return this.router.navigate(['']);
        });
      } else {
        this.apiService.createUser(this.loginForm.value).subscribe((res) => {
          if (true) {
            this.loginForm.controls['isLogin'].setValue(true);
            this.dialog.open(GlobalErrorComponent, {
              data: {
                title: 'success,you are redirected for login',
                action: () => {
                  this.title = titleEnum.login;
                  this.toggleSlider = titleEnum.register;
                  this.dialog.closeAll();
                },
              },
            });
          }
        });
      }
    }
  }
  onToggle(e: any) {
    this.title =
      this.title === titleEnum.login ? titleEnum.register : titleEnum.login;
    this.toggleSlider =
      this.toggleSlider === titleEnum.login
        ? titleEnum.register
        : titleEnum.login;
  }
}
