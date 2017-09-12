import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6349Component } from './my-comp-6349.component';

describe('MyComp6349Component', () => {
  let component: MyComp6349Component;
  let fixture: ComponentFixture<MyComp6349Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6349Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6349Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
