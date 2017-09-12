import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4536Component } from './my-comp-4536.component';

describe('MyComp4536Component', () => {
  let component: MyComp4536Component;
  let fixture: ComponentFixture<MyComp4536Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4536Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4536Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
