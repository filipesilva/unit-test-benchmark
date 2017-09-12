import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8792Component } from './my-comp-8792.component';

describe('MyComp8792Component', () => {
  let component: MyComp8792Component;
  let fixture: ComponentFixture<MyComp8792Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8792Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8792Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
