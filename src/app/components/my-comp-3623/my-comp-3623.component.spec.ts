import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3623Component } from './my-comp-3623.component';

describe('MyComp3623Component', () => {
  let component: MyComp3623Component;
  let fixture: ComponentFixture<MyComp3623Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3623Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3623Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
