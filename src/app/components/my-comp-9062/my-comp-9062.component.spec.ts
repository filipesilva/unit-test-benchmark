import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9062Component } from './my-comp-9062.component';

describe('MyComp9062Component', () => {
  let component: MyComp9062Component;
  let fixture: ComponentFixture<MyComp9062Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9062Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9062Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
