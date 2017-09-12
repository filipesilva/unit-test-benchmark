import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6257Component } from './my-comp-6257.component';

describe('MyComp6257Component', () => {
  let component: MyComp6257Component;
  let fixture: ComponentFixture<MyComp6257Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6257Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6257Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
