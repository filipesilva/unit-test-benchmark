import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4369Component } from './my-comp-4369.component';

describe('MyComp4369Component', () => {
  let component: MyComp4369Component;
  let fixture: ComponentFixture<MyComp4369Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4369Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4369Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
