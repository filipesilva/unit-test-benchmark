import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4799Component } from './my-comp-4799.component';

describe('MyComp4799Component', () => {
  let component: MyComp4799Component;
  let fixture: ComponentFixture<MyComp4799Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4799Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4799Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
