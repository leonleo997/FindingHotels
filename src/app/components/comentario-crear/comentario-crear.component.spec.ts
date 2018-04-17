import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentarioCrearComponent } from './comentario-crear.component';

describe('ComentarioCrearComponent', () => {
  let component: ComentarioCrearComponent;
  let fixture: ComponentFixture<ComentarioCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComentarioCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentarioCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
