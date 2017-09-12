import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp833Component } from './my-comp-833.component';

describe('MyComp833Component', () => {
  let component: MyComp833Component;
  let fixture: ComponentFixture<MyComp833Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp833Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp833Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
