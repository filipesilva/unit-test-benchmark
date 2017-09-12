import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4915Component } from './my-comp-4915.component';

describe('MyComp4915Component', () => {
  let component: MyComp4915Component;
  let fixture: ComponentFixture<MyComp4915Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4915Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4915Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
