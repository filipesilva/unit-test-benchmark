import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8450Component } from './my-comp-8450.component';

describe('MyComp8450Component', () => {
  let component: MyComp8450Component;
  let fixture: ComponentFixture<MyComp8450Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8450Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8450Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
