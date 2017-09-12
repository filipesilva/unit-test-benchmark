import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4089Component } from './my-comp-4089.component';

describe('MyComp4089Component', () => {
  let component: MyComp4089Component;
  let fixture: ComponentFixture<MyComp4089Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4089Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4089Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
