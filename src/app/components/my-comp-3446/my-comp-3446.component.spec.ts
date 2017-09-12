import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3446Component } from './my-comp-3446.component';

describe('MyComp3446Component', () => {
  let component: MyComp3446Component;
  let fixture: ComponentFixture<MyComp3446Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3446Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3446Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
