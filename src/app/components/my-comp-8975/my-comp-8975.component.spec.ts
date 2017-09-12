import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8975Component } from './my-comp-8975.component';

describe('MyComp8975Component', () => {
  let component: MyComp8975Component;
  let fixture: ComponentFixture<MyComp8975Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8975Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8975Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
