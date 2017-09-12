import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3570Component } from './my-comp-3570.component';

describe('MyComp3570Component', () => {
  let component: MyComp3570Component;
  let fixture: ComponentFixture<MyComp3570Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3570Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3570Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
