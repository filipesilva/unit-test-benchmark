import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8644Component } from './my-comp-8644.component';

describe('MyComp8644Component', () => {
  let component: MyComp8644Component;
  let fixture: ComponentFixture<MyComp8644Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8644Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8644Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
