import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4259Component } from './my-comp-4259.component';

describe('MyComp4259Component', () => {
  let component: MyComp4259Component;
  let fixture: ComponentFixture<MyComp4259Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4259Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4259Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
