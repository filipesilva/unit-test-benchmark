import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7865Component } from './my-comp-7865.component';

describe('MyComp7865Component', () => {
  let component: MyComp7865Component;
  let fixture: ComponentFixture<MyComp7865Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7865Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7865Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
