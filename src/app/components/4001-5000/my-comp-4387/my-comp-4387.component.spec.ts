import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4387Component } from './my-comp-4387.component';

describe('MyComp4387Component', () => {
  let component: MyComp4387Component;
  let fixture: ComponentFixture<MyComp4387Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4387Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4387Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
