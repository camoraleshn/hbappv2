import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VListaDependientesPage } from './v-lista-dependientes.page';

describe('VListaDependientesPage', () => {
  let component: VListaDependientesPage;
  let fixture: ComponentFixture<VListaDependientesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VListaDependientesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VListaDependientesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
