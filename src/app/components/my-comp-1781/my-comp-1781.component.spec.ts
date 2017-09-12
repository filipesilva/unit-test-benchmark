import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1781Component } from './my-comp-1781.component';

describe('MyComp1781Component', () => {
  let component: MyComp1781Component;
  let fixture: ComponentFixture<MyComp1781Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1781Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1781Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
