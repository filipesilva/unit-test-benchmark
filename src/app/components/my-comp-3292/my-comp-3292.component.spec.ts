import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3292Component } from './my-comp-3292.component';

describe('MyComp3292Component', () => {
  let component: MyComp3292Component;
  let fixture: ComponentFixture<MyComp3292Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3292Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3292Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
