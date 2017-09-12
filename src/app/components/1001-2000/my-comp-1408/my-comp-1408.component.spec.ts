import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1408Component } from './my-comp-1408.component';

describe('MyComp1408Component', () => {
  let component: MyComp1408Component;
  let fixture: ComponentFixture<MyComp1408Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1408Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1408Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
