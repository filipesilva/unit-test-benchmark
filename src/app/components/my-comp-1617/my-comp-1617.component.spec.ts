import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1617Component } from './my-comp-1617.component';

describe('MyComp1617Component', () => {
  let component: MyComp1617Component;
  let fixture: ComponentFixture<MyComp1617Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1617Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1617Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
