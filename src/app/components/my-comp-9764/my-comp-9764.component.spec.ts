import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9764Component } from './my-comp-9764.component';

describe('MyComp9764Component', () => {
  let component: MyComp9764Component;
  let fixture: ComponentFixture<MyComp9764Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9764Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9764Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
