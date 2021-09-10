import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UploadficheirosPage } from './uploadficheiros.page';

describe('UploadficheirosPage', () => {
  let component: UploadficheirosPage;
  let fixture: ComponentFixture<UploadficheirosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadficheirosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UploadficheirosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
