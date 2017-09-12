import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8818Component } from './my-comp-8818.component';

describe('MyComp8818Component', () => {
  let component: MyComp8818Component;
  let fixture: ComponentFixture<MyComp8818Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8818Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8818Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
