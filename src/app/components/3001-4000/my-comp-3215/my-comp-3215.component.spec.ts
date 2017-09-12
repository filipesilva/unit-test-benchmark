import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3215Component } from './my-comp-3215.component';

describe('MyComp3215Component', () => {
  let component: MyComp3215Component;
  let fixture: ComponentFixture<MyComp3215Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3215Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3215Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
