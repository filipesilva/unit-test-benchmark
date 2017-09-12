import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3186Component } from './my-comp-3186.component';

describe('MyComp3186Component', () => {
  let component: MyComp3186Component;
  let fixture: ComponentFixture<MyComp3186Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3186Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3186Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
