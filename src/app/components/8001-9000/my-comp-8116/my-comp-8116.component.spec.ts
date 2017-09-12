import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8116Component } from './my-comp-8116.component';

describe('MyComp8116Component', () => {
  let component: MyComp8116Component;
  let fixture: ComponentFixture<MyComp8116Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8116Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8116Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
