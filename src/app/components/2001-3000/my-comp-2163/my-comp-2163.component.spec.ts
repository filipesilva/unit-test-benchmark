import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2163Component } from './my-comp-2163.component';

describe('MyComp2163Component', () => {
  let component: MyComp2163Component;
  let fixture: ComponentFixture<MyComp2163Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2163Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2163Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
