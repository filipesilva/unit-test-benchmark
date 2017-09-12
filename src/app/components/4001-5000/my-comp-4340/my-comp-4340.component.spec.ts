import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4340Component } from './my-comp-4340.component';

describe('MyComp4340Component', () => {
  let component: MyComp4340Component;
  let fixture: ComponentFixture<MyComp4340Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4340Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4340Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
