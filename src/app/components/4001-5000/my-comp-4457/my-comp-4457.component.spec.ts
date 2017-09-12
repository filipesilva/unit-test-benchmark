import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4457Component } from './my-comp-4457.component';

describe('MyComp4457Component', () => {
  let component: MyComp4457Component;
  let fixture: ComponentFixture<MyComp4457Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4457Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4457Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
