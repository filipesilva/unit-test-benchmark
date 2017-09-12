import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp452Component } from './my-comp-452.component';

describe('MyComp452Component', () => {
  let component: MyComp452Component;
  let fixture: ComponentFixture<MyComp452Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp452Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp452Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
