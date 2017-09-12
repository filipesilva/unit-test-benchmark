import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6604Component } from './my-comp-6604.component';

describe('MyComp6604Component', () => {
  let component: MyComp6604Component;
  let fixture: ComponentFixture<MyComp6604Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6604Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6604Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
