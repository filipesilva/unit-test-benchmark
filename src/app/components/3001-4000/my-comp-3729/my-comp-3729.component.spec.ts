import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3729Component } from './my-comp-3729.component';

describe('MyComp3729Component', () => {
  let component: MyComp3729Component;
  let fixture: ComponentFixture<MyComp3729Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3729Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3729Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
