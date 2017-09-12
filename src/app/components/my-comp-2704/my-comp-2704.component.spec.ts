import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2704Component } from './my-comp-2704.component';

describe('MyComp2704Component', () => {
  let component: MyComp2704Component;
  let fixture: ComponentFixture<MyComp2704Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2704Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2704Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
