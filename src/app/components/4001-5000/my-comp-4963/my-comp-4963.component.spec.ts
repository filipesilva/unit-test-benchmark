import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4963Component } from './my-comp-4963.component';

describe('MyComp4963Component', () => {
  let component: MyComp4963Component;
  let fixture: ComponentFixture<MyComp4963Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4963Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4963Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
