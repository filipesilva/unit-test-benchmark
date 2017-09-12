import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7019Component } from './my-comp-7019.component';

describe('MyComp7019Component', () => {
  let component: MyComp7019Component;
  let fixture: ComponentFixture<MyComp7019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
