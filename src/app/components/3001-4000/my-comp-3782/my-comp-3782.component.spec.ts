import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3782Component } from './my-comp-3782.component';

describe('MyComp3782Component', () => {
  let component: MyComp3782Component;
  let fixture: ComponentFixture<MyComp3782Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3782Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3782Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
