import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3313Component } from './my-comp-3313.component';

describe('MyComp3313Component', () => {
  let component: MyComp3313Component;
  let fixture: ComponentFixture<MyComp3313Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3313Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3313Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
