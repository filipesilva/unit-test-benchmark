import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4762Component } from './my-comp-4762.component';

describe('MyComp4762Component', () => {
  let component: MyComp4762Component;
  let fixture: ComponentFixture<MyComp4762Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4762Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4762Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
