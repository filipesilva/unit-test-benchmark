import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2915Component } from './my-comp-2915.component';

describe('MyComp2915Component', () => {
  let component: MyComp2915Component;
  let fixture: ComponentFixture<MyComp2915Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2915Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2915Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
