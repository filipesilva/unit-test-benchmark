import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6414Component } from './my-comp-6414.component';

describe('MyComp6414Component', () => {
  let component: MyComp6414Component;
  let fixture: ComponentFixture<MyComp6414Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6414Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6414Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
