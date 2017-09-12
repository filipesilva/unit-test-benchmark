import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5541Component } from './my-comp-5541.component';

describe('MyComp5541Component', () => {
  let component: MyComp5541Component;
  let fixture: ComponentFixture<MyComp5541Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5541Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5541Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
