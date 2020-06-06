import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VVistaCitaPage } from './v-vista-cita.page';

describe('VVistaCitaPage', () => {
  let component: VVistaCitaPage;
  let fixture: ComponentFixture<VVistaCitaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VVistaCitaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VVistaCitaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
