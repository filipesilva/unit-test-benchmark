import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5343Component } from './my-comp-5343.component';

describe('MyComp5343Component', () => {
  let component: MyComp5343Component;
  let fixture: ComponentFixture<MyComp5343Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5343Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5343Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
