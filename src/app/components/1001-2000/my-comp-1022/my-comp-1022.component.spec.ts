import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1022Component } from './my-comp-1022.component';

describe('MyComp1022Component', () => {
  let component: MyComp1022Component;
  let fixture: ComponentFixture<MyComp1022Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1022Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
