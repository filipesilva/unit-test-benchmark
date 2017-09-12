import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3431Component } from './my-comp-3431.component';

describe('MyComp3431Component', () => {
  let component: MyComp3431Component;
  let fixture: ComponentFixture<MyComp3431Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3431Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3431Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
