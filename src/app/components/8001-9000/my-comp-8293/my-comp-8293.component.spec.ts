import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8293Component } from './my-comp-8293.component';

describe('MyComp8293Component', () => {
  let component: MyComp8293Component;
  let fixture: ComponentFixture<MyComp8293Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8293Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8293Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
