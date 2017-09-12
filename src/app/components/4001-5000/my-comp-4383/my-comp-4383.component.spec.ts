import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4383Component } from './my-comp-4383.component';

describe('MyComp4383Component', () => {
  let component: MyComp4383Component;
  let fixture: ComponentFixture<MyComp4383Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4383Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4383Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
