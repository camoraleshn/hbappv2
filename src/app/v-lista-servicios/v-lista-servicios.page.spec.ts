import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VListaServiciosPage } from './v-lista-servicios.page';

describe('VListaServiciosPage', () => {
  let component: VListaServiciosPage;
  let fixture: ComponentFixture<VListaServiciosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VListaServiciosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VListaServiciosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
