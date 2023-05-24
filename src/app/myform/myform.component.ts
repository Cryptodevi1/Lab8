import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormArray,FormBuilder, Validators } from '@angular/forms';
import { Catalog } from './class/catalog';
import { dateValidator } from './Service/dateValidators';
import { ValidatorDayDateService } from './Service/validator-day-date.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-myform',
  templateUrl:'./myform.component.html',
  styleUrls: ['./myform.component.scss'],
})
export class MyformComponent  implements OnInit {

  catalogForm!:FormGroup;
  catalog!: Catalog;

  datePattern = "^[0-9]{2}[.-/][0-9]{2}[.-/][0-9]{4}$";
  constructor(private fb:FormBuilder ,private alertController:AlertController) {
    this.catalogForm = this.fb.group({
      npap_name: ['',[Validators.required]],
      npap_address:[''],
      npap_bdate: [' ',Validators.pattern(this.datePattern)],
      npap_tel: [' '],
      addtional: new FormArray([new FormControl]),
    });
   }
   addNpap() {
    console.log("Add");
    (this.catalogForm.controls['addtional'] as FormArray).push(
       new FormControl()
    )
 }

 deleteNpap(i: any) {
    console.log("Delete");
    (this.catalogForm.controls['addtional'] as FormArray).removeAt(i)
 }
 getControls(){ return (this.catalogForm.get('addtional')as FormArray).controls;}

 onSubmit(){
  let name = this.catalogForm.value.npap_name;
  let address = this.catalogForm.value.npap_address;
  let bd = this.catalogForm.value.npap_bdate;
  let tel = this.catalogForm.value.npap_tel;
  let addtional = this.catalogForm.value.addtional;
  let valid = new ValidatorDayDateService();
  if(valid.validate_diff_date(bd,"17.05.2023")){
    this.catalog = new Catalog(name,address,bd,tel,addtional);
    console.log("Submit");
  }else
    this.presentAlert("")
}
ngOnInit() {}
async presentAlert(message: string) {
  const alert = await this.alertController.create({
     header: 'Помилка',
     subHeader: '',
     message: message,
     buttons: ['OK'],
  });

  await alert.present();
}
  

}
