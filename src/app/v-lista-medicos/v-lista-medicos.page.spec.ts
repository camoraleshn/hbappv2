import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VListaMedicosPage } from './v-lista-medicos.page';

describe('VListaMedicosPage', () => {
  let component: VListaMedicosPage;
  let fixture: ComponentFixture<VListaMedicosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VListaMedicosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VListaMedicosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
