import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8152Component } from './my-comp-8152.component';

describe('MyComp8152Component', () => {
  let component: MyComp8152Component;
  let fixture: ComponentFixture<MyComp8152Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8152Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8152Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
