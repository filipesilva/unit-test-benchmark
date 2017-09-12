import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3267Component } from './my-comp-3267.component';

describe('MyComp3267Component', () => {
  let component: MyComp3267Component;
  let fixture: ComponentFixture<MyComp3267Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3267Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3267Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
