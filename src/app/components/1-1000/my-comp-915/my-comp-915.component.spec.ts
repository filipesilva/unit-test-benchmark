import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp915Component } from './my-comp-915.component';

describe('MyComp915Component', () => {
  let component: MyComp915Component;
  let fixture: ComponentFixture<MyComp915Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp915Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp915Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
