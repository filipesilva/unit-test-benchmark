import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9887Component } from './my-comp-9887.component';

describe('MyComp9887Component', () => {
  let component: MyComp9887Component;
  let fixture: ComponentFixture<MyComp9887Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9887Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9887Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
