import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; //
import { ProducttService,  } from '../productt.service' ;
import { ToastController } from '@ionic/angular';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  products: any;//
  item1cost:number;
  item2cost:number;
  item3cost:number;
  item4cost:number;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, 
    private producttService: ProducttService, private crudservice: CrudService,
    private toastCtrl: ToastController,) { }

  ngOnInit() {
    this.crudservice.readProduct().subscribe(data =>{//
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

save(){
  let record = {};//
  record['Item1cost'] = this.item1cost;
  record['Item2cost'] = this.item2cost;
  record['Item3cost'] = this.item3cost;
  record['Item4cost'] = this.item4cost;
  this.crudservice.createProduct(record).then(resp => {
    this.item1cost = 0;
    this.item2cost = 0;
    this.item3cost = 0;
    this.item4cost = 0;
    console.log(resp);
    this.router.navigateByUrl('product-list');
  })
  .catch(error => {
    console.log(error);
  });
  
}

bill(){
  console.log('billed');
  this.router.navigateByUrl('product-list');
}
pay(){
  console.log('Payed');
}
}
