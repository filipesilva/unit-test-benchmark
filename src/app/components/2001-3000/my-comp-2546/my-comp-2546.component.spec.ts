import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2546Component } from './my-comp-2546.component';

describe('MyComp2546Component', () => {
  let component: MyComp2546Component;
  let fixture: ComponentFixture<MyComp2546Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2546Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2546Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
