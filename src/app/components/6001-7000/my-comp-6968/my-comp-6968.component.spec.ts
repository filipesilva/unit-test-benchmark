import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6968Component } from './my-comp-6968.component';

describe('MyComp6968Component', () => {
  let component: MyComp6968Component;
  let fixture: ComponentFixture<MyComp6968Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6968Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6968Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
