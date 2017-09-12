import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3413Component } from './my-comp-3413.component';

describe('MyComp3413Component', () => {
  let component: MyComp3413Component;
  let fixture: ComponentFixture<MyComp3413Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3413Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3413Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
