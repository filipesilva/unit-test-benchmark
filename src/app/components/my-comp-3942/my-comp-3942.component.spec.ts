import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3942Component } from './my-comp-3942.component';

describe('MyComp3942Component', () => {
  let component: MyComp3942Component;
  let fixture: ComponentFixture<MyComp3942Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3942Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3942Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
