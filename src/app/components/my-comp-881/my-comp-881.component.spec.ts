import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp881Component } from './my-comp-881.component';

describe('MyComp881Component', () => {
  let component: MyComp881Component;
  let fixture: ComponentFixture<MyComp881Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp881Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp881Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
