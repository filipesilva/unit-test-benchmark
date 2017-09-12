import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8115Component } from './my-comp-8115.component';

describe('MyComp8115Component', () => {
  let component: MyComp8115Component;
  let fixture: ComponentFixture<MyComp8115Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8115Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8115Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
