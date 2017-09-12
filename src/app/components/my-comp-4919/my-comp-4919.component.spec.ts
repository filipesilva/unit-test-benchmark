import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4919Component } from './my-comp-4919.component';

describe('MyComp4919Component', () => {
  let component: MyComp4919Component;
  let fixture: ComponentFixture<MyComp4919Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4919Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4919Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
