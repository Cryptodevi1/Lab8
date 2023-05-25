import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Catalog} from '../myform/class/catalog';
import { ValidatorDateService } from '../myform/Service/validator.servise';
import { ValidatorDayDateService } from '../myform/Service/validator-day-date.service';

@Component({
   selector: 'app-updateform',
   templateUrl: './updateform.component.html',
   styleUrls: ['./updateform.component.scss'],
})
export class UpdateformComponent implements OnInit {

   @Input() catalog!: Catalog;
   @Input() show: boolean = true;
   @Output() studentChange: EventEmitter<Catalog> = new EventEmitter<Catalog>();
   @Output() showChange = new EventEmitter();
   constructor() { }
   validate_date(c: string): boolean {
    let validator = new ValidatorDateService();
    if (c)
       if (!validator.validate_date(c)) return false; else return true;
    else return true;
   }
   save(n: any, address: any, bd: any, tel: any) {
      this.show = false;
      if (this.validate_date(bd)) {
        let valid = new ValidatorDayDateService();
        if((bd) && !valid.validate_diff_date(bd,"30.05.2023"))
        throw Error ("Wrong Date")
     }
     else throw Error("Date is wrong");
     this.catalog = new Catalog(n, address, bd, tel, this.catalog.addtional);
     this.studentChange.emit(this.catalog);
     this.showChange.emit(this.show);
    }


    ngOnInit() { }
 
 }