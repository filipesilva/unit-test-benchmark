import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2046Component } from './my-comp-2046.component';

describe('MyComp2046Component', () => {
  let component: MyComp2046Component;
  let fixture: ComponentFixture<MyComp2046Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2046Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2046Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
