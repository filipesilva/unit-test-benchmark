import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4318Component } from './my-comp-4318.component';

describe('MyComp4318Component', () => {
  let component: MyComp4318Component;
  let fixture: ComponentFixture<MyComp4318Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4318Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4318Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
