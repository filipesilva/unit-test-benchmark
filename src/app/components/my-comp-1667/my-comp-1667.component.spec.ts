import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1667Component } from './my-comp-1667.component';

describe('MyComp1667Component', () => {
  let component: MyComp1667Component;
  let fixture: ComponentFixture<MyComp1667Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1667Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1667Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
