import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VVistaPagoPage } from './v-vista-pago.page';

describe('VVistaPagoPage', () => {
  let component: VVistaPagoPage;
  let fixture: ComponentFixture<VVistaPagoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VVistaPagoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VVistaPagoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
