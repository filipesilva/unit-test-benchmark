import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9874Component } from './my-comp-9874.component';

describe('MyComp9874Component', () => {
  let component: MyComp9874Component;
  let fixture: ComponentFixture<MyComp9874Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9874Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9874Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
