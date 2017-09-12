import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2817Component } from './my-comp-2817.component';

describe('MyComp2817Component', () => {
  let component: MyComp2817Component;
  let fixture: ComponentFixture<MyComp2817Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2817Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2817Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
