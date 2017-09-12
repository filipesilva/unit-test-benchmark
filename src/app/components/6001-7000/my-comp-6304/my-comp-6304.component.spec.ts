import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6304Component } from './my-comp-6304.component';

describe('MyComp6304Component', () => {
  let component: MyComp6304Component;
  let fixture: ComponentFixture<MyComp6304Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6304Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6304Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
