import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8181Component } from './my-comp-8181.component';

describe('MyComp8181Component', () => {
  let component: MyComp8181Component;
  let fixture: ComponentFixture<MyComp8181Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8181Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8181Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
