import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3276Component } from './my-comp-3276.component';

describe('MyComp3276Component', () => {
  let component: MyComp3276Component;
  let fixture: ComponentFixture<MyComp3276Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3276Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3276Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
