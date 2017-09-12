import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8378Component } from './my-comp-8378.component';

describe('MyComp8378Component', () => {
  let component: MyComp8378Component;
  let fixture: ComponentFixture<MyComp8378Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8378Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8378Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
