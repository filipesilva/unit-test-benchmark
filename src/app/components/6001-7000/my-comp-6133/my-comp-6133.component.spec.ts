import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6133Component } from './my-comp-6133.component';

describe('MyComp6133Component', () => {
  let component: MyComp6133Component;
  let fixture: ComponentFixture<MyComp6133Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6133Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6133Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
