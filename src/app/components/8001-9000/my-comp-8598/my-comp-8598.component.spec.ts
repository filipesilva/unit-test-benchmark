import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8598Component } from './my-comp-8598.component';

describe('MyComp8598Component', () => {
  let component: MyComp8598Component;
  let fixture: ComponentFixture<MyComp8598Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8598Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8598Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
