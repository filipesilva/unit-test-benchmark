import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1019Component } from './my-comp-1019.component';

describe('MyComp1019Component', () => {
  let component: MyComp1019Component;
  let fixture: ComponentFixture<MyComp1019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
