import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8022Component } from './my-comp-8022.component';

describe('MyComp8022Component', () => {
  let component: MyComp8022Component;
  let fixture: ComponentFixture<MyComp8022Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8022Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
