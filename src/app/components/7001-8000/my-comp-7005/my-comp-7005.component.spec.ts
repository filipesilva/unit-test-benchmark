import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7005Component } from './my-comp-7005.component';

describe('MyComp7005Component', () => {
  let component: MyComp7005Component;
  let fixture: ComponentFixture<MyComp7005Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7005Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7005Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
