import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8785Component } from './my-comp-8785.component';

describe('MyComp8785Component', () => {
  let component: MyComp8785Component;
  let fixture: ComponentFixture<MyComp8785Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8785Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8785Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
