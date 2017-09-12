import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6115Component } from './my-comp-6115.component';

describe('MyComp6115Component', () => {
  let component: MyComp6115Component;
  let fixture: ComponentFixture<MyComp6115Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6115Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6115Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
