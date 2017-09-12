import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8270Component } from './my-comp-8270.component';

describe('MyComp8270Component', () => {
  let component: MyComp8270Component;
  let fixture: ComponentFixture<MyComp8270Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8270Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8270Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
