import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4765Component } from './my-comp-4765.component';

describe('MyComp4765Component', () => {
  let component: MyComp4765Component;
  let fixture: ComponentFixture<MyComp4765Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4765Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4765Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
