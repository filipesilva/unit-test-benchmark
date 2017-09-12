import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3509Component } from './my-comp-3509.component';

describe('MyComp3509Component', () => {
  let component: MyComp3509Component;
  let fixture: ComponentFixture<MyComp3509Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3509Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3509Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
