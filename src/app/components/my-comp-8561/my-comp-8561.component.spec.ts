import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8561Component } from './my-comp-8561.component';

describe('MyComp8561Component', () => {
  let component: MyComp8561Component;
  let fixture: ComponentFixture<MyComp8561Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8561Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8561Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
