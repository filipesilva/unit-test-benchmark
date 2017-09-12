import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8718Component } from './my-comp-8718.component';

describe('MyComp8718Component', () => {
  let component: MyComp8718Component;
  let fixture: ComponentFixture<MyComp8718Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8718Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8718Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
