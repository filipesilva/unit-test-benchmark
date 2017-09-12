import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8465Component } from './my-comp-8465.component';

describe('MyComp8465Component', () => {
  let component: MyComp8465Component;
  let fixture: ComponentFixture<MyComp8465Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8465Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8465Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
