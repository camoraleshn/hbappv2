import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VVistaMedicoPage } from './v-vista-medico.page';

describe('VVistaMedicoPage', () => {
  let component: VVistaMedicoPage;
  let fixture: ComponentFixture<VVistaMedicoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VVistaMedicoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VVistaMedicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
