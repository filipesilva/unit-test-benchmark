import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5668Component } from './my-comp-5668.component';

describe('MyComp5668Component', () => {
  let component: MyComp5668Component;
  let fixture: ComponentFixture<MyComp5668Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5668Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5668Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
