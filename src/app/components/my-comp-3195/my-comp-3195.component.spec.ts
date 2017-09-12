import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3195Component } from './my-comp-3195.component';

describe('MyComp3195Component', () => {
  let component: MyComp3195Component;
  let fixture: ComponentFixture<MyComp3195Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3195Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3195Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
