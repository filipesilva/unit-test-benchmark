import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3430Component } from './my-comp-3430.component';

describe('MyComp3430Component', () => {
  let component: MyComp3430Component;
  let fixture: ComponentFixture<MyComp3430Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3430Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3430Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
