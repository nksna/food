import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent{
  restraunt:any[]=[];
   constructor(private Activate:ActivatedRoute,private master:MasterService){
     this.Activate.params.subscribe((res:any)=>{
      this.loadrestrauntdatalist(res.categoryId)
     })
   }
   
  loadrestrauntdatalist(name:string){
    this.master.getrestrauntfoodlist(name).subscribe((res:any)=>{
     this.restraunt=res.data;
    })
  }
}
