import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3699Component } from './my-comp-3699.component';

describe('MyComp3699Component', () => {
  let component: MyComp3699Component;
  let fixture: ComponentFixture<MyComp3699Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3699Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3699Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
