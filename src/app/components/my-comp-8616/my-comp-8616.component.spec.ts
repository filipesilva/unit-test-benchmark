import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8616Component } from './my-comp-8616.component';

describe('MyComp8616Component', () => {
  let component: MyComp8616Component;
  let fixture: ComponentFixture<MyComp8616Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8616Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8616Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
