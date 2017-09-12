import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3238Component } from './my-comp-3238.component';

describe('MyComp3238Component', () => {
  let component: MyComp3238Component;
  let fixture: ComponentFixture<MyComp3238Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3238Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3238Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
