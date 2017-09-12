import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8111Component } from './my-comp-8111.component';

describe('MyComp8111Component', () => {
  let component: MyComp8111Component;
  let fixture: ComponentFixture<MyComp8111Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8111Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8111Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
