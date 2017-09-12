import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp472Component } from './my-comp-472.component';

describe('MyComp472Component', () => {
  let component: MyComp472Component;
  let fixture: ComponentFixture<MyComp472Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp472Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp472Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
