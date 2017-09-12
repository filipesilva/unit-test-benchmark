import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8286Component } from './my-comp-8286.component';

describe('MyComp8286Component', () => {
  let component: MyComp8286Component;
  let fixture: ComponentFixture<MyComp8286Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8286Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8286Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
