import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5814Component } from './my-comp-5814.component';

describe('MyComp5814Component', () => {
  let component: MyComp5814Component;
  let fixture: ComponentFixture<MyComp5814Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5814Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5814Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
