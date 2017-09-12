import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4032Component } from './my-comp-4032.component';

describe('MyComp4032Component', () => {
  let component: MyComp4032Component;
  let fixture: ComponentFixture<MyComp4032Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4032Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4032Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
