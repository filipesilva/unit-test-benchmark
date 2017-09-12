import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8964Component } from './my-comp-8964.component';

describe('MyComp8964Component', () => {
  let component: MyComp8964Component;
  let fixture: ComponentFixture<MyComp8964Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8964Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8964Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
