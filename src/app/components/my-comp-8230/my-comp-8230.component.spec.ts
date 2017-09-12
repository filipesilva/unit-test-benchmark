import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8230Component } from './my-comp-8230.component';

describe('MyComp8230Component', () => {
  let component: MyComp8230Component;
  let fixture: ComponentFixture<MyComp8230Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8230Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8230Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
