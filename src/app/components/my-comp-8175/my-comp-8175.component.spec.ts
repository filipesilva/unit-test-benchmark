import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8175Component } from './my-comp-8175.component';

describe('MyComp8175Component', () => {
  let component: MyComp8175Component;
  let fixture: ComponentFixture<MyComp8175Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8175Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8175Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
