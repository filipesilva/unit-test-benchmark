import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6207Component } from './my-comp-6207.component';

describe('MyComp6207Component', () => {
  let component: MyComp6207Component;
  let fixture: ComponentFixture<MyComp6207Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6207Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6207Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
