import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6465Component } from './my-comp-6465.component';

describe('MyComp6465Component', () => {
  let component: MyComp6465Component;
  let fixture: ComponentFixture<MyComp6465Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6465Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6465Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
