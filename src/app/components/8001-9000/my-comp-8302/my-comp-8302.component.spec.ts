import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8302Component } from './my-comp-8302.component';

describe('MyComp8302Component', () => {
  let component: MyComp8302Component;
  let fixture: ComponentFixture<MyComp8302Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8302Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8302Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
