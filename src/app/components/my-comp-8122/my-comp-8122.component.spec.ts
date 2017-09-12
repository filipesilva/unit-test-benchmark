import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8122Component } from './my-comp-8122.component';

describe('MyComp8122Component', () => {
  let component: MyComp8122Component;
  let fixture: ComponentFixture<MyComp8122Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8122Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8122Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
