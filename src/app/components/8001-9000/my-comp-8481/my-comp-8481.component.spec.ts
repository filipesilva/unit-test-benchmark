import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8481Component } from './my-comp-8481.component';

describe('MyComp8481Component', () => {
  let component: MyComp8481Component;
  let fixture: ComponentFixture<MyComp8481Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8481Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8481Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
