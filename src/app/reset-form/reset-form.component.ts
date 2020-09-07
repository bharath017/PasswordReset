import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms'; 
import { ActivatedRoute, Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ResetFormService } from './reset-form.service';

@Component({
  selector: 'app-reset-form',
  templateUrl: './reset-form.component.html',
  styleUrls: ['./reset-form.component.css']
})
export class ResetFormComponent implements OnInit {

  myForm : FormGroup;
  params: Params;


  constructor(public service: ResetFormService,
  private formBuilder : FormBuilder,
   private route: ActivatedRoute,
   private toastr : ToastrService) { }

   ngOnInit() {
     this.route.queryParams.subscribe((params: Params) => {
        this.params = params;
        let id: number = params['UserId'];
    this.myForm = this.formBuilder.group({
      UserId: [id],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password1: ['', [Validators.required]],
     token:  params['token']
      },{ validators: PasswordValidation });
  
   });
 } 
    onSubmit() {
    console.log(this.myForm.value);
    this.service.resetPassword(this.myForm.value)
      .subscribe(
        response =>  this.toastr.success('Password Changed Successfully','Learn2Unlock'),
        error => console.error('Error!', error)
      );
   };


  get password() { return this.myForm.get('password'); }
  get password1() { return this.myForm.get('password1'); }

}
 function PasswordValidation(control: AbstractControl):{[key: string]: boolean } | null{
    const password=control.get('password');
    const password1=control.get('password1');
    return password && password1 && password.value != password1.value ?
    {'mismatch': true} : null;
  }