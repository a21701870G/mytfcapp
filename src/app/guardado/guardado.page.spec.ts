import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GuardadoPage } from './guardado.page';

describe('GuardadoPage', () => {
  let component: GuardadoPage;
  let fixture: ComponentFixture<GuardadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuardadoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GuardadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
