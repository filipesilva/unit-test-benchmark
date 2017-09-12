import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9022Component } from './my-comp-9022.component';

describe('MyComp9022Component', () => {
  let component: MyComp9022Component;
  let fixture: ComponentFixture<MyComp9022Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9022Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
