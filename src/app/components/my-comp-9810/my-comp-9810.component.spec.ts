import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9810Component } from './my-comp-9810.component';

describe('MyComp9810Component', () => {
  let component: MyComp9810Component;
  let fixture: ComponentFixture<MyComp9810Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9810Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9810Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
