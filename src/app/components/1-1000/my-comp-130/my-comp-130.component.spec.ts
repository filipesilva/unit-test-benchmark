import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp130Component } from './my-comp-130.component';

describe('MyComp130Component', () => {
  let component: MyComp130Component;
  let fixture: ComponentFixture<MyComp130Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp130Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp130Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
