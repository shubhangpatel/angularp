import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'app';
  reactiveForm:FormGroup ;
  formdata:any={};
   ngOnInit(){
         this.reactiveForm= new FormGroup({
          firstname: new FormControl(null,Validators.required),
          lastname: new FormControl(null,Validators.required), 
          email: new FormControl(null,[Validators.required,Validators.email]),
          username: new FormControl(null ),
          dob: new FormControl(null),
          gender: new FormControl('male'),
          address: new FormGroup({
            street: new FormControl(null,Validators.required),   
            country: new FormControl('India'),
            city: new FormControl(null),
            region: new FormControl(null),
            postal: new FormControl(null)
          }),
          skills: new FormArray([
            new FormControl(null,Validators.required)
          ])

         })
   }
   deleteLocations(index :number)
   {
     (<FormArray> this.reactiveForm.get('skills')).removeAt(index)
   }
  
   addLocations(){
    (<FormArray> this.reactiveForm.get('skills')).push(
      new FormControl(null,Validators.required)
     )
   console.log(this.reactiveForm.get('skills')['controls'])
  }
   submitted()
   {
    console.log(this.reactiveForm) 
    this.formdata=this.reactiveForm.value;
   }
}
