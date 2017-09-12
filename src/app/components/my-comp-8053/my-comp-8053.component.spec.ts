import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8053Component } from './my-comp-8053.component';

describe('MyComp8053Component', () => {
  let component: MyComp8053Component;
  let fixture: ComponentFixture<MyComp8053Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8053Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8053Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
