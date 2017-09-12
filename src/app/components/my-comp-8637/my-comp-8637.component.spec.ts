import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8637Component } from './my-comp-8637.component';

describe('MyComp8637Component', () => {
  let component: MyComp8637Component;
  let fixture: ComponentFixture<MyComp8637Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8637Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8637Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
