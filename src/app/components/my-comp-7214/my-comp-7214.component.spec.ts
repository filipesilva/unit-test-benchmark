import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7214Component } from './my-comp-7214.component';

describe('MyComp7214Component', () => {
  let component: MyComp7214Component;
  let fixture: ComponentFixture<MyComp7214Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7214Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7214Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
