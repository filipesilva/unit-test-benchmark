import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6019Component } from './my-comp-6019.component';

describe('MyComp6019Component', () => {
  let component: MyComp6019Component;
  let fixture: ComponentFixture<MyComp6019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
