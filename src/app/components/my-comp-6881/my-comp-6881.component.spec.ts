import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6881Component } from './my-comp-6881.component';

describe('MyComp6881Component', () => {
  let component: MyComp6881Component;
  let fixture: ComponentFixture<MyComp6881Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6881Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6881Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
