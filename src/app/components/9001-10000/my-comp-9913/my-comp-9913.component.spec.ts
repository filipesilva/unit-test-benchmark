import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9913Component } from './my-comp-9913.component';

describe('MyComp9913Component', () => {
  let component: MyComp9913Component;
  let fixture: ComponentFixture<MyComp9913Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9913Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9913Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
