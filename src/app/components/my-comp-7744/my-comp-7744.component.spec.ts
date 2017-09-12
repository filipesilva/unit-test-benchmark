import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7744Component } from './my-comp-7744.component';

describe('MyComp7744Component', () => {
  let component: MyComp7744Component;
  let fixture: ComponentFixture<MyComp7744Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7744Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7744Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
