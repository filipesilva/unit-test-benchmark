import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6905Component } from './my-comp-6905.component';

describe('MyComp6905Component', () => {
  let component: MyComp6905Component;
  let fixture: ComponentFixture<MyComp6905Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6905Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6905Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
