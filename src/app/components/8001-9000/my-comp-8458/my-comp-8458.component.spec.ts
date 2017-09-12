import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8458Component } from './my-comp-8458.component';

describe('MyComp8458Component', () => {
  let component: MyComp8458Component;
  let fixture: ComponentFixture<MyComp8458Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8458Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8458Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
