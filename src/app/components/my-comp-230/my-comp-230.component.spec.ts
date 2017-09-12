import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp230Component } from './my-comp-230.component';

describe('MyComp230Component', () => {
  let component: MyComp230Component;
  let fixture: ComponentFixture<MyComp230Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp230Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp230Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
