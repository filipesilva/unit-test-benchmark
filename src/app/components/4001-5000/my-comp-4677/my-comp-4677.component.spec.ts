import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4677Component } from './my-comp-4677.component';

describe('MyComp4677Component', () => {
  let component: MyComp4677Component;
  let fixture: ComponentFixture<MyComp4677Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4677Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4677Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
