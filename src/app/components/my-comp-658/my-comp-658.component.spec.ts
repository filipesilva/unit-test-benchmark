import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp658Component } from './my-comp-658.component';

describe('MyComp658Component', () => {
  let component: MyComp658Component;
  let fixture: ComponentFixture<MyComp658Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp658Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp658Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
