import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp985Component } from './my-comp-985.component';

describe('MyComp985Component', () => {
  let component: MyComp985Component;
  let fixture: ComponentFixture<MyComp985Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp985Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp985Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
