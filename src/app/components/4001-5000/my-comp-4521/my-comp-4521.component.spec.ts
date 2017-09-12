import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4521Component } from './my-comp-4521.component';

describe('MyComp4521Component', () => {
  let component: MyComp4521Component;
  let fixture: ComponentFixture<MyComp4521Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4521Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4521Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
