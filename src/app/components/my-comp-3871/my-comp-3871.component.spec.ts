import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3871Component } from './my-comp-3871.component';

describe('MyComp3871Component', () => {
  let component: MyComp3871Component;
  let fixture: ComponentFixture<MyComp3871Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3871Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3871Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
