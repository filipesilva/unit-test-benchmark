import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2760Component } from './my-comp-2760.component';

describe('MyComp2760Component', () => {
  let component: MyComp2760Component;
  let fixture: ComponentFixture<MyComp2760Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2760Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2760Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
