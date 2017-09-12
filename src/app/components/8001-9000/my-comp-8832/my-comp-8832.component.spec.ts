import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8832Component } from './my-comp-8832.component';

describe('MyComp8832Component', () => {
  let component: MyComp8832Component;
  let fixture: ComponentFixture<MyComp8832Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8832Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8832Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
