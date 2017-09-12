import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4106Component } from './my-comp-4106.component';

describe('MyComp4106Component', () => {
  let component: MyComp4106Component;
  let fixture: ComponentFixture<MyComp4106Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4106Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4106Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
