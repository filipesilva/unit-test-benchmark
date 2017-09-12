import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8593Component } from './my-comp-8593.component';

describe('MyComp8593Component', () => {
  let component: MyComp8593Component;
  let fixture: ComponentFixture<MyComp8593Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8593Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8593Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
