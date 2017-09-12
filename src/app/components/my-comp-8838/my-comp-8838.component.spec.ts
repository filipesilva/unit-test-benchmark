import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8838Component } from './my-comp-8838.component';

describe('MyComp8838Component', () => {
  let component: MyComp8838Component;
  let fixture: ComponentFixture<MyComp8838Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8838Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8838Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
