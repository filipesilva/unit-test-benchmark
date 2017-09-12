import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9832Component } from './my-comp-9832.component';

describe('MyComp9832Component', () => {
  let component: MyComp9832Component;
  let fixture: ComponentFixture<MyComp9832Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9832Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9832Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
