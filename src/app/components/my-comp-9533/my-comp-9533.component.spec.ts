import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9533Component } from './my-comp-9533.component';

describe('MyComp9533Component', () => {
  let component: MyComp9533Component;
  let fixture: ComponentFixture<MyComp9533Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9533Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9533Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
