import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3438Component } from './my-comp-3438.component';

describe('MyComp3438Component', () => {
  let component: MyComp3438Component;
  let fixture: ComponentFixture<MyComp3438Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3438Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3438Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
