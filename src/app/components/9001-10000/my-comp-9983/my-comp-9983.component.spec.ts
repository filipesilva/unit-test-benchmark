import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9983Component } from './my-comp-9983.component';

describe('MyComp9983Component', () => {
  let component: MyComp9983Component;
  let fixture: ComponentFixture<MyComp9983Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9983Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9983Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
