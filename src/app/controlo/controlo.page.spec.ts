import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ControloPage } from './controlo.page';

describe('ControloPage', () => {
  let component: ControloPage;
  let fixture: ComponentFixture<ControloPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControloPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ControloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
