import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7496Component } from './my-comp-7496.component';

describe('MyComp7496Component', () => {
  let component: MyComp7496Component;
  let fixture: ComponentFixture<MyComp7496Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7496Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7496Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
