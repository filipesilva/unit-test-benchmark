import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1724Component } from './my-comp-1724.component';

describe('MyComp1724Component', () => {
  let component: MyComp1724Component;
  let fixture: ComponentFixture<MyComp1724Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1724Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1724Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
