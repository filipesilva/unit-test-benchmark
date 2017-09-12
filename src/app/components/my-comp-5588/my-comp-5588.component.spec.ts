import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5588Component } from './my-comp-5588.component';

describe('MyComp5588Component', () => {
  let component: MyComp5588Component;
  let fixture: ComponentFixture<MyComp5588Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5588Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5588Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
