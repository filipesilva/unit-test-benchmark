import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8901Component } from './my-comp-8901.component';

describe('MyComp8901Component', () => {
  let component: MyComp8901Component;
  let fixture: ComponentFixture<MyComp8901Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8901Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8901Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
