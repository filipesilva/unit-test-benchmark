import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9132Component } from './my-comp-9132.component';

describe('MyComp9132Component', () => {
  let component: MyComp9132Component;
  let fixture: ComponentFixture<MyComp9132Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9132Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9132Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
