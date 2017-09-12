import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8762Component } from './my-comp-8762.component';

describe('MyComp8762Component', () => {
  let component: MyComp8762Component;
  let fixture: ComponentFixture<MyComp8762Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8762Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8762Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
