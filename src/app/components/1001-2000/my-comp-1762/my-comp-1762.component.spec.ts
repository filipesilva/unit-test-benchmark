import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1762Component } from './my-comp-1762.component';

describe('MyComp1762Component', () => {
  let component: MyComp1762Component;
  let fixture: ComponentFixture<MyComp1762Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1762Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1762Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
