import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp268Component } from './my-comp-268.component';

describe('MyComp268Component', () => {
  let component: MyComp268Component;
  let fixture: ComponentFixture<MyComp268Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp268Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp268Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
