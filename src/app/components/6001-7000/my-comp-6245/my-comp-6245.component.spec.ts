import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6245Component } from './my-comp-6245.component';

describe('MyComp6245Component', () => {
  let component: MyComp6245Component;
  let fixture: ComponentFixture<MyComp6245Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6245Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6245Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
