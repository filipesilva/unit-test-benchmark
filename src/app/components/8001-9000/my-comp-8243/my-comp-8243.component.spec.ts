import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8243Component } from './my-comp-8243.component';

describe('MyComp8243Component', () => {
  let component: MyComp8243Component;
  let fixture: ComponentFixture<MyComp8243Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8243Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8243Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
