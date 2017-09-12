import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2707Component } from './my-comp-2707.component';

describe('MyComp2707Component', () => {
  let component: MyComp2707Component;
  let fixture: ComponentFixture<MyComp2707Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2707Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2707Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
