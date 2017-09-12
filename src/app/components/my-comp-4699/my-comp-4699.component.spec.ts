import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4699Component } from './my-comp-4699.component';

describe('MyComp4699Component', () => {
  let component: MyComp4699Component;
  let fixture: ComponentFixture<MyComp4699Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4699Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4699Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
