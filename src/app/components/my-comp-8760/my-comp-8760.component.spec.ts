import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8760Component } from './my-comp-8760.component';

describe('MyComp8760Component', () => {
  let component: MyComp8760Component;
  let fixture: ComponentFixture<MyComp8760Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8760Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8760Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
