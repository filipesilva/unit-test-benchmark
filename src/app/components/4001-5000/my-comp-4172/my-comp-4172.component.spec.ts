import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4172Component } from './my-comp-4172.component';

describe('MyComp4172Component', () => {
  let component: MyComp4172Component;
  let fixture: ComponentFixture<MyComp4172Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4172Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4172Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
