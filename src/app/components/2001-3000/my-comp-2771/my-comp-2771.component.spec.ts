import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2771Component } from './my-comp-2771.component';

describe('MyComp2771Component', () => {
  let component: MyComp2771Component;
  let fixture: ComponentFixture<MyComp2771Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2771Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2771Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
