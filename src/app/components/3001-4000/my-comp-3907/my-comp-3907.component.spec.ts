import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3907Component } from './my-comp-3907.component';

describe('MyComp3907Component', () => {
  let component: MyComp3907Component;
  let fixture: ComponentFixture<MyComp3907Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3907Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3907Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
