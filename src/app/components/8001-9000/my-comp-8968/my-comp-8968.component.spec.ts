import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8968Component } from './my-comp-8968.component';

describe('MyComp8968Component', () => {
  let component: MyComp8968Component;
  let fixture: ComponentFixture<MyComp8968Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8968Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8968Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
