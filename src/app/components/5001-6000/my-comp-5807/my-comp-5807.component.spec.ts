import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5807Component } from './my-comp-5807.component';

describe('MyComp5807Component', () => {
  let component: MyComp5807Component;
  let fixture: ComponentFixture<MyComp5807Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5807Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5807Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
