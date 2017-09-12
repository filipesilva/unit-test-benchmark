import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3707Component } from './my-comp-3707.component';

describe('MyComp3707Component', () => {
  let component: MyComp3707Component;
  let fixture: ComponentFixture<MyComp3707Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3707Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3707Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
