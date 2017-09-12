import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6496Component } from './my-comp-6496.component';

describe('MyComp6496Component', () => {
  let component: MyComp6496Component;
  let fixture: ComponentFixture<MyComp6496Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6496Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6496Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
