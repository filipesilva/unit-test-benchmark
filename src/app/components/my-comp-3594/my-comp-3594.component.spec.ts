import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3594Component } from './my-comp-3594.component';

describe('MyComp3594Component', () => {
  let component: MyComp3594Component;
  let fixture: ComponentFixture<MyComp3594Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3594Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3594Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
