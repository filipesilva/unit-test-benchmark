import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4604Component } from './my-comp-4604.component';

describe('MyComp4604Component', () => {
  let component: MyComp4604Component;
  let fixture: ComponentFixture<MyComp4604Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4604Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4604Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
