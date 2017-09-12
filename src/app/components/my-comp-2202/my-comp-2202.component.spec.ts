import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2202Component } from './my-comp-2202.component';

describe('MyComp2202Component', () => {
  let component: MyComp2202Component;
  let fixture: ComponentFixture<MyComp2202Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2202Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2202Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
