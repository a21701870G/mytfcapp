import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlteraremailPage } from './alteraremail.page';

describe('AlteraremailPage', () => {
  let component: AlteraremailPage;
  let fixture: ComponentFixture<AlteraremailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlteraremailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlteraremailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
