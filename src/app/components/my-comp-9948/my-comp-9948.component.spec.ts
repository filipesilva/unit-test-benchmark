import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9948Component } from './my-comp-9948.component';

describe('MyComp9948Component', () => {
  let component: MyComp9948Component;
  let fixture: ComponentFixture<MyComp9948Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9948Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9948Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
