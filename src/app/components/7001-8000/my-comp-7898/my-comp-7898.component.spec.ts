import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7898Component } from './my-comp-7898.component';

describe('MyComp7898Component', () => {
  let component: MyComp7898Component;
  let fixture: ComponentFixture<MyComp7898Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7898Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7898Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
