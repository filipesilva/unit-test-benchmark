import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3687Component } from './my-comp-3687.component';

describe('MyComp3687Component', () => {
  let component: MyComp3687Component;
  let fixture: ComponentFixture<MyComp3687Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3687Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3687Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
