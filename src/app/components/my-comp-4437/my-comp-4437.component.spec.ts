import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4437Component } from './my-comp-4437.component';

describe('MyComp4437Component', () => {
  let component: MyComp4437Component;
  let fixture: ComponentFixture<MyComp4437Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4437Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4437Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
