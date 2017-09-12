import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1422Component } from './my-comp-1422.component';

describe('MyComp1422Component', () => {
  let component: MyComp1422Component;
  let fixture: ComponentFixture<MyComp1422Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1422Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1422Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
