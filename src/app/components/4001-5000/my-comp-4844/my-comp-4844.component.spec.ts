import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4844Component } from './my-comp-4844.component';

describe('MyComp4844Component', () => {
  let component: MyComp4844Component;
  let fixture: ComponentFixture<MyComp4844Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4844Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4844Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
