import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9019Component } from './my-comp-9019.component';

describe('MyComp9019Component', () => {
  let component: MyComp9019Component;
  let fixture: ComponentFixture<MyComp9019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
