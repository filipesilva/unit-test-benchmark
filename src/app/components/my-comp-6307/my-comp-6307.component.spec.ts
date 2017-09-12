import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6307Component } from './my-comp-6307.component';

describe('MyComp6307Component', () => {
  let component: MyComp6307Component;
  let fixture: ComponentFixture<MyComp6307Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6307Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6307Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
