import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9619Component } from './my-comp-9619.component';

describe('MyComp9619Component', () => {
  let component: MyComp9619Component;
  let fixture: ComponentFixture<MyComp9619Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9619Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9619Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
