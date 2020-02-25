import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductAccountPage } from './product-account.page';

describe('ProductAccountPage', () => {
  let component: ProductAccountPage;
  let fixture: ComponentFixture<ProductAccountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductAccountPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductAccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
