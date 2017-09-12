import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp430Component } from './my-comp-430.component';

describe('MyComp430Component', () => {
  let component: MyComp430Component;
  let fixture: ComponentFixture<MyComp430Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp430Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp430Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
