import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8255Component } from './my-comp-8255.component';

describe('MyComp8255Component', () => {
  let component: MyComp8255Component;
  let fixture: ComponentFixture<MyComp8255Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8255Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8255Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
