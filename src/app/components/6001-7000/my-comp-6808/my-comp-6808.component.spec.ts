import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6808Component } from './my-comp-6808.component';

describe('MyComp6808Component', () => {
  let component: MyComp6808Component;
  let fixture: ComponentFixture<MyComp6808Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6808Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6808Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
