import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp126Component } from './my-comp-126.component';

describe('MyComp126Component', () => {
  let component: MyComp126Component;
  let fixture: ComponentFixture<MyComp126Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp126Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp126Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
