import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3464Component } from './my-comp-3464.component';

describe('MyComp3464Component', () => {
  let component: MyComp3464Component;
  let fixture: ComponentFixture<MyComp3464Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3464Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3464Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
