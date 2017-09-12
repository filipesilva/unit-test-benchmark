import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3686Component } from './my-comp-3686.component';

describe('MyComp3686Component', () => {
  let component: MyComp3686Component;
  let fixture: ComponentFixture<MyComp3686Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3686Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3686Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
