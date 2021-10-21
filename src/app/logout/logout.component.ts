import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/service/api.service';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';

@Component({
  template:''
})
export class LogoutComponent implements OnInit {
  logoutForm!: FormGroup;
  isLoadingResults = false;
  constructor(private router: Router, private api: ApiService, 
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.logoutForm = this.formBuilder.group({});
  }

  addLogout(form: NgForm) {
    localStorage.removeItem("jwt");
    this.isLoadingResults = true;
    this.router.navigate(['/login']);
  }
}