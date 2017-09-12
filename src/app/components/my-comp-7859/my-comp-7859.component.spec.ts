import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7859Component } from './my-comp-7859.component';

describe('MyComp7859Component', () => {
  let component: MyComp7859Component;
  let fixture: ComponentFixture<MyComp7859Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7859Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7859Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
