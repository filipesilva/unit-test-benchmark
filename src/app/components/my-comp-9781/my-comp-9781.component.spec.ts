import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9781Component } from './my-comp-9781.component';

describe('MyComp9781Component', () => {
  let component: MyComp9781Component;
  let fixture: ComponentFixture<MyComp9781Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9781Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9781Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
