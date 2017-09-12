import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3485Component } from './my-comp-3485.component';

describe('MyComp3485Component', () => {
  let component: MyComp3485Component;
  let fixture: ComponentFixture<MyComp3485Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3485Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3485Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
