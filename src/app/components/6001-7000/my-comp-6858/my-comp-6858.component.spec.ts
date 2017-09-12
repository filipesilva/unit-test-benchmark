import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6858Component } from './my-comp-6858.component';

describe('MyComp6858Component', () => {
  let component: MyComp6858Component;
  let fixture: ComponentFixture<MyComp6858Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6858Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6858Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
