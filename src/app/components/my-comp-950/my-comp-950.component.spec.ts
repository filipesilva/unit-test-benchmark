import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp950Component } from './my-comp-950.component';

describe('MyComp950Component', () => {
  let component: MyComp950Component;
  let fixture: ComponentFixture<MyComp950Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp950Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp950Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
