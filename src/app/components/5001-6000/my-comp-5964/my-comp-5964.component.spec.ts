import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5964Component } from './my-comp-5964.component';

describe('MyComp5964Component', () => {
  let component: MyComp5964Component;
  let fixture: ComponentFixture<MyComp5964Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5964Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5964Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
