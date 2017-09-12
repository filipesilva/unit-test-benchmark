import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1229Component } from './my-comp-1229.component';

describe('MyComp1229Component', () => {
  let component: MyComp1229Component;
  let fixture: ComponentFixture<MyComp1229Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1229Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1229Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
