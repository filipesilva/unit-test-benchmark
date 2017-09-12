import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4911Component } from './my-comp-4911.component';

describe('MyComp4911Component', () => {
  let component: MyComp4911Component;
  let fixture: ComponentFixture<MyComp4911Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4911Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4911Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
