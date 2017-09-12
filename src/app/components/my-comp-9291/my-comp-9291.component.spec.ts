import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9291Component } from './my-comp-9291.component';

describe('MyComp9291Component', () => {
  let component: MyComp9291Component;
  let fixture: ComponentFixture<MyComp9291Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9291Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9291Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
