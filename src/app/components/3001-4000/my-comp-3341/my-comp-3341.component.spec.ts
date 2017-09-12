import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3341Component } from './my-comp-3341.component';

describe('MyComp3341Component', () => {
  let component: MyComp3341Component;
  let fixture: ComponentFixture<MyComp3341Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3341Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3341Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
