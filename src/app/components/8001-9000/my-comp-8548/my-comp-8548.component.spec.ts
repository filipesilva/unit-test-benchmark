import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8548Component } from './my-comp-8548.component';

describe('MyComp8548Component', () => {
  let component: MyComp8548Component;
  let fixture: ComponentFixture<MyComp8548Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8548Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8548Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
