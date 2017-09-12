import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2101Component } from './my-comp-2101.component';

describe('MyComp2101Component', () => {
  let component: MyComp2101Component;
  let fixture: ComponentFixture<MyComp2101Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2101Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
