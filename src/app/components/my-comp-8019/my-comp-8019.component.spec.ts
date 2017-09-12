import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8019Component } from './my-comp-8019.component';

describe('MyComp8019Component', () => {
  let component: MyComp8019Component;
  let fixture: ComponentFixture<MyComp8019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
