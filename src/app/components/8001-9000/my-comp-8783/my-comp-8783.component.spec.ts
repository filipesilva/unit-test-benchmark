import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8783Component } from './my-comp-8783.component';

describe('MyComp8783Component', () => {
  let component: MyComp8783Component;
  let fixture: ComponentFixture<MyComp8783Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8783Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8783Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
