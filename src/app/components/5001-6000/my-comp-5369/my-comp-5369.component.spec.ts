import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5369Component } from './my-comp-5369.component';

describe('MyComp5369Component', () => {
  let component: MyComp5369Component;
  let fixture: ComponentFixture<MyComp5369Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5369Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5369Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
