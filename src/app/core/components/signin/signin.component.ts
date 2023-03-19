import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  signInForm!:FormGroup;
  loginDta:any;
  isNewUser:boolean = false
constructor(private fb: FormBuilder,private http:HttpService){}

  ngOnInit(): void {
    this.initializeForm()
  }

  initializeForm(){
this.signInForm = this.fb.group({
    "userName":[],
    "password":[]
})
  }

  signIn(){
    const httpParams = new HttpParams()
                      .set('userName',this.signInForm.controls['userName'].value)
                      .set('password',this.signInForm.controls['password'].value)
    this.http.getDataFromServerByQueryPrameter("users",httpParams).subscribe((el:any)=>{
      if(el && el.lenght>0){
        this.loginDta = el
        this.isNewUser = false
      }else{
        this.isNewUser = true
      }
    },
    error=>{

    })
  }
}
