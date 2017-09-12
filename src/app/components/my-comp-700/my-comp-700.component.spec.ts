import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp700Component } from './my-comp-700.component';

describe('MyComp700Component', () => {
  let component: MyComp700Component;
  let fixture: ComponentFixture<MyComp700Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp700Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp700Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
