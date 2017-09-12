import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8272Component } from './my-comp-8272.component';

describe('MyComp8272Component', () => {
  let component: MyComp8272Component;
  let fixture: ComponentFixture<MyComp8272Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8272Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8272Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
