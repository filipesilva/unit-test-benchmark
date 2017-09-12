import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3470Component } from './my-comp-3470.component';

describe('MyComp3470Component', () => {
  let component: MyComp3470Component;
  let fixture: ComponentFixture<MyComp3470Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3470Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3470Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
