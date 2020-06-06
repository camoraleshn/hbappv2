import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VListaEspecialidadesPage } from './v-lista-especialidades.page';

describe('VListaEspecialidadesPage', () => {
  let component: VListaEspecialidadesPage;
  let fixture: ComponentFixture<VListaEspecialidadesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VListaEspecialidadesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VListaEspecialidadesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
