import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9693Component } from './my-comp-9693.component';

describe('MyComp9693Component', () => {
  let component: MyComp9693Component;
  let fixture: ComponentFixture<MyComp9693Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9693Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9693Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
