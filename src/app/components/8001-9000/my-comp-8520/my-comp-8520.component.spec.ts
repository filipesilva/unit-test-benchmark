import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8520Component } from './my-comp-8520.component';

describe('MyComp8520Component', () => {
  let component: MyComp8520Component;
  let fixture: ComponentFixture<MyComp8520Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8520Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8520Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
