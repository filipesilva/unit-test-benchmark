import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6678Component } from './my-comp-6678.component';

describe('MyComp6678Component', () => {
  let component: MyComp6678Component;
  let fixture: ComponentFixture<MyComp6678Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6678Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6678Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
