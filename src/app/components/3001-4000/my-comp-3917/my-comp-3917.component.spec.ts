import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3917Component } from './my-comp-3917.component';

describe('MyComp3917Component', () => {
  let component: MyComp3917Component;
  let fixture: ComponentFixture<MyComp3917Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3917Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3917Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
