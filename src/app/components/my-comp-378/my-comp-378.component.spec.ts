import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp378Component } from './my-comp-378.component';

describe('MyComp378Component', () => {
  let component: MyComp378Component;
  let fixture: ComponentFixture<MyComp378Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp378Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp378Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
