import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4399Component } from './my-comp-4399.component';

describe('MyComp4399Component', () => {
  let component: MyComp4399Component;
  let fixture: ComponentFixture<MyComp4399Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4399Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4399Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
