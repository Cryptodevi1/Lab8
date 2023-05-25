import { Component, OnInit,Input } from '@angular/core';
import { Catalog } from '../myform/class/catalog';

@Component({
  selector: 'app-viewform',
  templateUrl: './viewform.component.html',
  styleUrls: ['./viewform.component.scss'],
})
export class ViewformComponent  implements OnInit {
  show_update: boolean = false;
  catalogs: Catalog[] = [];
  constructor() { }

  ngOnInit() {}
  addStudent(event: any) {
    if (event as Catalog) {
       let catalog: Catalog = event;
       this.catalogs.push(catalog);
       console.log(this.catalogs);
    } else {
       throw new Error("Error of type");
    }
 }
 update() { this.show_update = true; }
 showUp(event: any) {
    if (typeof event === "boolean") { this.show_update = event; }
    else
       throw new Error("Error of type");
 }
 update_save(event: any, i: number) {
    if (event as Catalog) {
       this.catalogs[i] = event;
    }
    else
       throw new Error("Error of type");
 }
}
