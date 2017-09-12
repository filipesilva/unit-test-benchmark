import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8120Component } from './my-comp-8120.component';

describe('MyComp8120Component', () => {
  let component: MyComp8120Component;
  let fixture: ComponentFixture<MyComp8120Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8120Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8120Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
