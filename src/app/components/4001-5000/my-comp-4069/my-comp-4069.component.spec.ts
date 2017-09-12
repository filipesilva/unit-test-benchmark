import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4069Component } from './my-comp-4069.component';

describe('MyComp4069Component', () => {
  let component: MyComp4069Component;
  let fixture: ComponentFixture<MyComp4069Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4069Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4069Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
