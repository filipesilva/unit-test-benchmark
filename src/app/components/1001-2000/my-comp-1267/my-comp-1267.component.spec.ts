import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1267Component } from './my-comp-1267.component';

describe('MyComp1267Component', () => {
  let component: MyComp1267Component;
  let fixture: ComponentFixture<MyComp1267Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1267Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1267Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
