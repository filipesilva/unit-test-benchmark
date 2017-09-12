import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6636Component } from './my-comp-6636.component';

describe('MyComp6636Component', () => {
  let component: MyComp6636Component;
  let fixture: ComponentFixture<MyComp6636Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6636Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6636Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
