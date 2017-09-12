import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8041Component } from './my-comp-8041.component';

describe('MyComp8041Component', () => {
  let component: MyComp8041Component;
  let fixture: ComponentFixture<MyComp8041Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8041Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8041Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
