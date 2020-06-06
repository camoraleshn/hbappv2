import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VVistaCompraPage } from './v-vista-compra.page';

describe('VVistaCompraPage', () => {
  let component: VVistaCompraPage;
  let fixture: ComponentFixture<VVistaCompraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VVistaCompraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VVistaCompraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
