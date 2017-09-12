import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3327Component } from './my-comp-3327.component';

describe('MyComp3327Component', () => {
  let component: MyComp3327Component;
  let fixture: ComponentFixture<MyComp3327Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3327Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3327Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
