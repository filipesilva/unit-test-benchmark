import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9915Component } from './my-comp-9915.component';

describe('MyComp9915Component', () => {
  let component: MyComp9915Component;
  let fixture: ComponentFixture<MyComp9915Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9915Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9915Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
