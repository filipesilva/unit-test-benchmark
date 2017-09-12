import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8590Component } from './my-comp-8590.component';

describe('MyComp8590Component', () => {
  let component: MyComp8590Component;
  let fixture: ComponentFixture<MyComp8590Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8590Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8590Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
