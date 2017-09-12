import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6551Component } from './my-comp-6551.component';

describe('MyComp6551Component', () => {
  let component: MyComp6551Component;
  let fixture: ComponentFixture<MyComp6551Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6551Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6551Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
