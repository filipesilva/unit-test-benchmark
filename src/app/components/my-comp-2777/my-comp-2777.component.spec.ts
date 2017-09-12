import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2777Component } from './my-comp-2777.component';

describe('MyComp2777Component', () => {
  let component: MyComp2777Component;
  let fixture: ComponentFixture<MyComp2777Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2777Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2777Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
