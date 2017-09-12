import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8752Component } from './my-comp-8752.component';

describe('MyComp8752Component', () => {
  let component: MyComp8752Component;
  let fixture: ComponentFixture<MyComp8752Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8752Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8752Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
