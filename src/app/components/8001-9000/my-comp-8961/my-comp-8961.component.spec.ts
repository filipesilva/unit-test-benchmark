import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8961Component } from './my-comp-8961.component';

describe('MyComp8961Component', () => {
  let component: MyComp8961Component;
  let fixture: ComponentFixture<MyComp8961Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8961Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8961Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
