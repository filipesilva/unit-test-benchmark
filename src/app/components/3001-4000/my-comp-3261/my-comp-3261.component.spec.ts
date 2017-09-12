import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3261Component } from './my-comp-3261.component';

describe('MyComp3261Component', () => {
  let component: MyComp3261Component;
  let fixture: ComponentFixture<MyComp3261Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3261Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3261Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
