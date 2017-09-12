import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4202Component } from './my-comp-4202.component';

describe('MyComp4202Component', () => {
  let component: MyComp4202Component;
  let fixture: ComponentFixture<MyComp4202Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4202Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4202Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
