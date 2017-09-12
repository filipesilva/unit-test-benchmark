import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8545Component } from './my-comp-8545.component';

describe('MyComp8545Component', () => {
  let component: MyComp8545Component;
  let fixture: ComponentFixture<MyComp8545Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8545Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8545Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
