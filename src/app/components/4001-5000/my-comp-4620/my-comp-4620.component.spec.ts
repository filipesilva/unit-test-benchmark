import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4620Component } from './my-comp-4620.component';

describe('MyComp4620Component', () => {
  let component: MyComp4620Component;
  let fixture: ComponentFixture<MyComp4620Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4620Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4620Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
