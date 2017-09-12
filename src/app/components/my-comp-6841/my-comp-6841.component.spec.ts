import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6841Component } from './my-comp-6841.component';

describe('MyComp6841Component', () => {
  let component: MyComp6841Component;
  let fixture: ComponentFixture<MyComp6841Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6841Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6841Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
