import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3473Component } from './my-comp-3473.component';

describe('MyComp3473Component', () => {
  let component: MyComp3473Component;
  let fixture: ComponentFixture<MyComp3473Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3473Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3473Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
