import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4005Component } from './my-comp-4005.component';

describe('MyComp4005Component', () => {
  let component: MyComp4005Component;
  let fixture: ComponentFixture<MyComp4005Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4005Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4005Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
