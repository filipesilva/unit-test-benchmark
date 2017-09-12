import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1742Component } from './my-comp-1742.component';

describe('MyComp1742Component', () => {
  let component: MyComp1742Component;
  let fixture: ComponentFixture<MyComp1742Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1742Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1742Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
