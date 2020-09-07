import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, FormGroup, FormControl, Validators} from '@angular/forms';
import { PasswordMatch } from './shared/PasswordMatch';
import { ResetService } from './reset.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

    params: Params;
   form: FormGroup = new FormGroup({});
      
  constructor(public service: ResetService,
   private route: ActivatedRoute,
   private fb: FormBuilder,
   private toastr : ToastrService) { 
          this.route.queryParams.subscribe((params: Params) => {
        this.params = params;
          });

  }

/*
  ngOnInit() {
      this.route.queryParams.subscribe((params: Params) => {
        this.params = params;
        
        this.form = this.fb.group({
      password: ['', [Validators.required]],
      confirm_password: ['', [Validators.required]],
      UserId : this.params['UserId'] ,
      token: this.params['token']
    }, { 
      validator: PasswordMatch('password', 'confirm_password')
    })


          });

  }

   get f(){
    return this.form.controls;
  }
   
  submit(){
    this.checkPassword(this.form);
  }
   
  checkPassword(form : FormGroup){
    this.service.resetPassword(form.value).subscribe(res => {
      this.toastr.success('Password Changed Successfully','Learn2Unlock');
      
    });
  } */
  ngOnInit() {
     this.resetForm();
     this.route.queryParams.subscribe((params: Params) => {
        this.params = params;
        let id: string = params['UserId'];
        this.service.formData={
          password : '',
          password1 : '',
          UserId : id,
          token: params['token']
     }
    });
  }

   resetForm(form? : NgForm)  {
     if(form!=null)
     form.resetForm();
     this.service.formData={
       password : '',
       password1 : '',
       UserId : null,
       token: ''
     }
   }  

  onSubmit(form : NgForm){
    this.checkPassword(form);
  }

  checkPassword(form : NgForm){
    this.service.resetPassword(form.value).subscribe(res => {
      this.toastr.success('Password Changed Successfully','Learn2Unlock');
      this.resetForm(form);
    });
  } 



}
