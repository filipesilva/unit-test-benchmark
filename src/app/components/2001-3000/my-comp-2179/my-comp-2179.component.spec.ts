import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2179Component } from './my-comp-2179.component';

describe('MyComp2179Component', () => {
  let component: MyComp2179Component;
  let fixture: ComponentFixture<MyComp2179Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2179Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2179Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
