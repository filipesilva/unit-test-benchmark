import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3925Component } from './my-comp-3925.component';

describe('MyComp3925Component', () => {
  let component: MyComp3925Component;
  let fixture: ComponentFixture<MyComp3925Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3925Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3925Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
