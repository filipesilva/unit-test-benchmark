import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3214Component } from './my-comp-3214.component';

describe('MyComp3214Component', () => {
  let component: MyComp3214Component;
  let fixture: ComponentFixture<MyComp3214Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3214Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3214Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
