import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5950Component } from './my-comp-5950.component';

describe('MyComp5950Component', () => {
  let component: MyComp5950Component;
  let fixture: ComponentFixture<MyComp5950Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5950Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5950Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
