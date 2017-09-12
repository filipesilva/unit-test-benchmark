import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9461Component } from './my-comp-9461.component';

describe('MyComp9461Component', () => {
  let component: MyComp9461Component;
  let fixture: ComponentFixture<MyComp9461Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9461Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9461Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
