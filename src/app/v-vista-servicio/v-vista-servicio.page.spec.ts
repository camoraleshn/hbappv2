import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VVistaServicioPage } from './v-vista-servicio.page';

describe('VVistaServicioPage', () => {
  let component: VVistaServicioPage;
  let fixture: ComponentFixture<VVistaServicioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VVistaServicioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VVistaServicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
