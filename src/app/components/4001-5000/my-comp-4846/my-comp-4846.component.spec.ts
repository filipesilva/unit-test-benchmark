import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4846Component } from './my-comp-4846.component';

describe('MyComp4846Component', () => {
  let component: MyComp4846Component;
  let fixture: ComponentFixture<MyComp4846Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4846Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4846Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
