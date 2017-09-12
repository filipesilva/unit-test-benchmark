import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6449Component } from './my-comp-6449.component';

describe('MyComp6449Component', () => {
  let component: MyComp6449Component;
  let fixture: ComponentFixture<MyComp6449Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6449Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6449Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
