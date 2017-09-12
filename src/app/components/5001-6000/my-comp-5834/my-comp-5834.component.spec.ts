import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5834Component } from './my-comp-5834.component';

describe('MyComp5834Component', () => {
  let component: MyComp5834Component;
  let fixture: ComponentFixture<MyComp5834Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5834Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5834Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
