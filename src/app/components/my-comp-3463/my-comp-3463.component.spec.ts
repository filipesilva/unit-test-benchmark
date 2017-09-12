import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3463Component } from './my-comp-3463.component';

describe('MyComp3463Component', () => {
  let component: MyComp3463Component;
  let fixture: ComponentFixture<MyComp3463Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3463Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3463Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
