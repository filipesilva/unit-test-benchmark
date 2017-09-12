import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6286Component } from './my-comp-6286.component';

describe('MyComp6286Component', () => {
  let component: MyComp6286Component;
  let fixture: ComponentFixture<MyComp6286Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6286Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6286Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
