import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7149Component } from './my-comp-7149.component';

describe('MyComp7149Component', () => {
  let component: MyComp7149Component;
  let fixture: ComponentFixture<MyComp7149Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7149Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7149Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
