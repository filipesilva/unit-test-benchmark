import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4213Component } from './my-comp-4213.component';

describe('MyComp4213Component', () => {
  let component: MyComp4213Component;
  let fixture: ComponentFixture<MyComp4213Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4213Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4213Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
