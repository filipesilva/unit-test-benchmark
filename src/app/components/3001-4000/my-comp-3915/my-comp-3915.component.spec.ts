import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3915Component } from './my-comp-3915.component';

describe('MyComp3915Component', () => {
  let component: MyComp3915Component;
  let fixture: ComponentFixture<MyComp3915Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3915Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3915Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
