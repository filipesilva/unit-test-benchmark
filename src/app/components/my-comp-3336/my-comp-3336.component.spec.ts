import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3336Component } from './my-comp-3336.component';

describe('MyComp3336Component', () => {
  let component: MyComp3336Component;
  let fixture: ComponentFixture<MyComp3336Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3336Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3336Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
