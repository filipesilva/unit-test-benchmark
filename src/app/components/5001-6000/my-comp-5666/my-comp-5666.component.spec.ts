import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5666Component } from './my-comp-5666.component';

describe('MyComp5666Component', () => {
  let component: MyComp5666Component;
  let fixture: ComponentFixture<MyComp5666Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5666Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5666Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
