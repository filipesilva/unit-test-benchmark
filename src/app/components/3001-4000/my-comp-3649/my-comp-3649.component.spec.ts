import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3649Component } from './my-comp-3649.component';

describe('MyComp3649Component', () => {
  let component: MyComp3649Component;
  let fixture: ComponentFixture<MyComp3649Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3649Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3649Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
