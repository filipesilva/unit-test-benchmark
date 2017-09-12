import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp195Component } from './my-comp-195.component';

describe('MyComp195Component', () => {
  let component: MyComp195Component;
  let fixture: ComponentFixture<MyComp195Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp195Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp195Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
