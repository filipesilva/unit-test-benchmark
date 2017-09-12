import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4013Component } from './my-comp-4013.component';

describe('MyComp4013Component', () => {
  let component: MyComp4013Component;
  let fixture: ComponentFixture<MyComp4013Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4013Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4013Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
