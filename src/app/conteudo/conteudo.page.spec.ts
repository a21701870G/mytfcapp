import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConteudoPage } from './conteudo.page';

describe('ConteudoPage', () => {
  let component: ConteudoPage;
  let fixture: ComponentFixture<ConteudoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConteudoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConteudoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
