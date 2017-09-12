import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7217Component } from './my-comp-7217.component';

describe('MyComp7217Component', () => {
  let component: MyComp7217Component;
  let fixture: ComponentFixture<MyComp7217Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7217Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7217Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
