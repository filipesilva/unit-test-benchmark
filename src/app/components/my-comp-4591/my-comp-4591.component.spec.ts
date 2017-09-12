import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4591Component } from './my-comp-4591.component';

describe('MyComp4591Component', () => {
  let component: MyComp4591Component;
  let fixture: ComponentFixture<MyComp4591Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4591Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4591Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
