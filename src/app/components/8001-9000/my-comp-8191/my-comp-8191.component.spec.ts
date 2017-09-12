import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8191Component } from './my-comp-8191.component';

describe('MyComp8191Component', () => {
  let component: MyComp8191Component;
  let fixture: ComponentFixture<MyComp8191Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8191Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8191Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
