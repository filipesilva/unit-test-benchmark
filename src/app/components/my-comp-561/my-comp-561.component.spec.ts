import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp561Component } from './my-comp-561.component';

describe('MyComp561Component', () => {
  let component: MyComp561Component;
  let fixture: ComponentFixture<MyComp561Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp561Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp561Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
