import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4861Component } from './my-comp-4861.component';

describe('MyComp4861Component', () => {
  let component: MyComp4861Component;
  let fixture: ComponentFixture<MyComp4861Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4861Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4861Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
