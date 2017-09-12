import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp818Component } from './my-comp-818.component';

describe('MyComp818Component', () => {
  let component: MyComp818Component;
  let fixture: ComponentFixture<MyComp818Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp818Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp818Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
