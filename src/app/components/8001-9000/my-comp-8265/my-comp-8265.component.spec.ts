import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8265Component } from './my-comp-8265.component';

describe('MyComp8265Component', () => {
  let component: MyComp8265Component;
  let fixture: ComponentFixture<MyComp8265Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8265Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8265Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
