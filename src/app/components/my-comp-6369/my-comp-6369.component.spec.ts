import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6369Component } from './my-comp-6369.component';

describe('MyComp6369Component', () => {
  let component: MyComp6369Component;
  let fixture: ComponentFixture<MyComp6369Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6369Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6369Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
