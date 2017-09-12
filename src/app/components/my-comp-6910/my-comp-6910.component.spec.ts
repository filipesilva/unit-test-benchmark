import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6910Component } from './my-comp-6910.component';

describe('MyComp6910Component', () => {
  let component: MyComp6910Component;
  let fixture: ComponentFixture<MyComp6910Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6910Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6910Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
