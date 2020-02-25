import { Component, OnInit } from '@angular/core';
import { ProducttService,  } from '../productt.service' 
import { CrudService, } from '../services/crud.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {
 products:any;

  constructor(private crudService: CrudService,private producttService: ProducttService, private router: Router) { }

  RemoveProduct(rowID) {
    this.crudService.deleteProduct(rowID);
  }
  EditProduct(record) {
    record.isEdit = true;
    record.item1cost = record.item1cost;
    record.item2cost = record.item2cost;
    record.item3cost = record.item3cost;
    record.item4cost = record.item4cost;
  }
  UpdateProduct(recordRow) {
    let record = {};
    record['item1cost'] = recordRow.item1cost;
    record['item1cost'] = recordRow.item1cost;
    record['item1cost'] = recordRow.item1cost;
    record['item1cost'] = recordRow.item1cost;
    this.crudService.update_Product(recordRow.id, record );
    recordRow.isEdit = false;
  }
  ngOnInit() {
    this.crudService.readProduct().subscribe(data => {
 
      this.products = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          item1cost: e.payload.doc.data()['Item1cost'],
          item2cost: e.payload.doc.data()['Item2cost'],
          item3cost: e.payload.doc.data()['Item3cost'],
          item4cost: e.payload.doc.data()['Item4cost'],
        };
      })
      console.log(this.products);
 
    });
  }
  add(){
    this.router.navigateByUrl('product-detail');
  }
}
