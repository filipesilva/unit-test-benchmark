import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4291Component } from './my-comp-4291.component';

describe('MyComp4291Component', () => {
  let component: MyComp4291Component;
  let fixture: ComponentFixture<MyComp4291Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4291Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4291Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
