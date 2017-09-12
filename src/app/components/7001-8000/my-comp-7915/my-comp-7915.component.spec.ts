import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7915Component } from './my-comp-7915.component';

describe('MyComp7915Component', () => {
  let component: MyComp7915Component;
  let fixture: ComponentFixture<MyComp7915Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7915Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7915Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
