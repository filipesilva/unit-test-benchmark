import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8150Component } from './my-comp-8150.component';

describe('MyComp8150Component', () => {
  let component: MyComp8150Component;
  let fixture: ComponentFixture<MyComp8150Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8150Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8150Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
