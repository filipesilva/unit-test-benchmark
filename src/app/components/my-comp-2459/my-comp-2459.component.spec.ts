import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2459Component } from './my-comp-2459.component';

describe('MyComp2459Component', () => {
  let component: MyComp2459Component;
  let fixture: ComponentFixture<MyComp2459Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2459Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2459Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
