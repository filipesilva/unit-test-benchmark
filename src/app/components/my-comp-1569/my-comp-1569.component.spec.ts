import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1569Component } from './my-comp-1569.component';

describe('MyComp1569Component', () => {
  let component: MyComp1569Component;
  let fixture: ComponentFixture<MyComp1569Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1569Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1569Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
