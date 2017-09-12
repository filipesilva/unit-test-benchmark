import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3472Component } from './my-comp-3472.component';

describe('MyComp3472Component', () => {
  let component: MyComp3472Component;
  let fixture: ComponentFixture<MyComp3472Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3472Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3472Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
