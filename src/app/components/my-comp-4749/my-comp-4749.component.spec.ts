import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4749Component } from './my-comp-4749.component';

describe('MyComp4749Component', () => {
  let component: MyComp4749Component;
  let fixture: ComponentFixture<MyComp4749Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4749Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4749Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
