import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8802Component } from './my-comp-8802.component';

describe('MyComp8802Component', () => {
  let component: MyComp8802Component;
  let fixture: ComponentFixture<MyComp8802Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8802Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8802Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
