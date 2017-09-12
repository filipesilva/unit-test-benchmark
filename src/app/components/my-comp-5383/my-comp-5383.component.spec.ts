import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5383Component } from './my-comp-5383.component';

describe('MyComp5383Component', () => {
  let component: MyComp5383Component;
  let fixture: ComponentFixture<MyComp5383Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5383Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5383Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
