import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp169Component } from './my-comp-169.component';

describe('MyComp169Component', () => {
  let component: MyComp169Component;
  let fixture: ComponentFixture<MyComp169Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp169Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp169Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
