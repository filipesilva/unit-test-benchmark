import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6725Component } from './my-comp-6725.component';

describe('MyComp6725Component', () => {
  let component: MyComp6725Component;
  let fixture: ComponentFixture<MyComp6725Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6725Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6725Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
