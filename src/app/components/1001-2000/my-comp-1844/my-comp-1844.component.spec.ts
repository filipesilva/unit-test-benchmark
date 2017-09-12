import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1844Component } from './my-comp-1844.component';

describe('MyComp1844Component', () => {
  let component: MyComp1844Component;
  let fixture: ComponentFixture<MyComp1844Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1844Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1844Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
