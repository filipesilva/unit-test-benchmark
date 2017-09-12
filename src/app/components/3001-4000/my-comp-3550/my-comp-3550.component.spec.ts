import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3550Component } from './my-comp-3550.component';

describe('MyComp3550Component', () => {
  let component: MyComp3550Component;
  let fixture: ComponentFixture<MyComp3550Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3550Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3550Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
