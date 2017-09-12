import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9479Component } from './my-comp-9479.component';

describe('MyComp9479Component', () => {
  let component: MyComp9479Component;
  let fixture: ComponentFixture<MyComp9479Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9479Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9479Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
