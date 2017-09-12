import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6740Component } from './my-comp-6740.component';

describe('MyComp6740Component', () => {
  let component: MyComp6740Component;
  let fixture: ComponentFixture<MyComp6740Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6740Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6740Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
