import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8574Component } from './my-comp-8574.component';

describe('MyComp8574Component', () => {
  let component: MyComp8574Component;
  let fixture: ComponentFixture<MyComp8574Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8574Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8574Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
