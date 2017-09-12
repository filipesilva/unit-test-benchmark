import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4019Component } from './my-comp-4019.component';

describe('MyComp4019Component', () => {
  let component: MyComp4019Component;
  let fixture: ComponentFixture<MyComp4019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
