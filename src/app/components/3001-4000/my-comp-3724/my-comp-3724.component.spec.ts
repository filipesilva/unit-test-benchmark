import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3724Component } from './my-comp-3724.component';

describe('MyComp3724Component', () => {
  let component: MyComp3724Component;
  let fixture: ComponentFixture<MyComp3724Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3724Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3724Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
