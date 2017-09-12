import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3097Component } from './my-comp-3097.component';

describe('MyComp3097Component', () => {
  let component: MyComp3097Component;
  let fixture: ComponentFixture<MyComp3097Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3097Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3097Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
