import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6069Component } from './my-comp-6069.component';

describe('MyComp6069Component', () => {
  let component: MyComp6069Component;
  let fixture: ComponentFixture<MyComp6069Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6069Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6069Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
