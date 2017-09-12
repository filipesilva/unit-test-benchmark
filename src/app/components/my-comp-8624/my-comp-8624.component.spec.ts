import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8624Component } from './my-comp-8624.component';

describe('MyComp8624Component', () => {
  let component: MyComp8624Component;
  let fixture: ComponentFixture<MyComp8624Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8624Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8624Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
