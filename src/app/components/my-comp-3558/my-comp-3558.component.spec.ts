import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3558Component } from './my-comp-3558.component';

describe('MyComp3558Component', () => {
  let component: MyComp3558Component;
  let fixture: ComponentFixture<MyComp3558Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3558Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3558Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
