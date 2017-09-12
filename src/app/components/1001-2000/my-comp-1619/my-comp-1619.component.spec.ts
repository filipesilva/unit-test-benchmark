import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1619Component } from './my-comp-1619.component';

describe('MyComp1619Component', () => {
  let component: MyComp1619Component;
  let fixture: ComponentFixture<MyComp1619Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1619Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1619Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
