import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2767Component } from './my-comp-2767.component';

describe('MyComp2767Component', () => {
  let component: MyComp2767Component;
  let fixture: ComponentFixture<MyComp2767Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2767Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2767Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
