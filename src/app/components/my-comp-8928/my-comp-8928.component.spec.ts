import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8928Component } from './my-comp-8928.component';

describe('MyComp8928Component', () => {
  let component: MyComp8928Component;
  let fixture: ComponentFixture<MyComp8928Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8928Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8928Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
