import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4704Component } from './my-comp-4704.component';

describe('MyComp4704Component', () => {
  let component: MyComp4704Component;
  let fixture: ComponentFixture<MyComp4704Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4704Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4704Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
