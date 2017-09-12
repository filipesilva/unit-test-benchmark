import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp144Component } from './my-comp-144.component';

describe('MyComp144Component', () => {
  let component: MyComp144Component;
  let fixture: ComponentFixture<MyComp144Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp144Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp144Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
