import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2019Component } from './my-comp-2019.component';

describe('MyComp2019Component', () => {
  let component: MyComp2019Component;
  let fixture: ComponentFixture<MyComp2019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
