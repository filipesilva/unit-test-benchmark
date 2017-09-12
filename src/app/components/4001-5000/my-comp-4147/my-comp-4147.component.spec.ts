import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4147Component } from './my-comp-4147.component';

describe('MyComp4147Component', () => {
  let component: MyComp4147Component;
  let fixture: ComponentFixture<MyComp4147Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4147Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4147Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
