import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1700Component } from './my-comp-1700.component';

describe('MyComp1700Component', () => {
  let component: MyComp1700Component;
  let fixture: ComponentFixture<MyComp1700Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1700Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1700Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
