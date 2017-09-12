import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8569Component } from './my-comp-8569.component';

describe('MyComp8569Component', () => {
  let component: MyComp8569Component;
  let fixture: ComponentFixture<MyComp8569Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8569Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8569Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
