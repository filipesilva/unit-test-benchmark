import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp60Component } from './my-comp-60.component';

describe('MyComp60Component', () => {
  let component: MyComp60Component;
  let fixture: ComponentFixture<MyComp60Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp60Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp60Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
