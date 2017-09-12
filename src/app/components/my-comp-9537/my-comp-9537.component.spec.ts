import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9537Component } from './my-comp-9537.component';

describe('MyComp9537Component', () => {
  let component: MyComp9537Component;
  let fixture: ComponentFixture<MyComp9537Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9537Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9537Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
