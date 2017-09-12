import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8795Component } from './my-comp-8795.component';

describe('MyComp8795Component', () => {
  let component: MyComp8795Component;
  let fixture: ComponentFixture<MyComp8795Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8795Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8795Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
