import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7955Component } from './my-comp-7955.component';

describe('MyComp7955Component', () => {
  let component: MyComp7955Component;
  let fixture: ComponentFixture<MyComp7955Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7955Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7955Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
