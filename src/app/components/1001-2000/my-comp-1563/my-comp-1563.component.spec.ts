import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1563Component } from './my-comp-1563.component';

describe('MyComp1563Component', () => {
  let component: MyComp1563Component;
  let fixture: ComponentFixture<MyComp1563Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1563Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1563Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
