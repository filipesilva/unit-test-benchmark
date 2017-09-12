import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5915Component } from './my-comp-5915.component';

describe('MyComp5915Component', () => {
  let component: MyComp5915Component;
  let fixture: ComponentFixture<MyComp5915Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5915Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5915Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
