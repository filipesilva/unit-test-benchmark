import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8076Component } from './my-comp-8076.component';

describe('MyComp8076Component', () => {
  let component: MyComp8076Component;
  let fixture: ComponentFixture<MyComp8076Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8076Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8076Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
