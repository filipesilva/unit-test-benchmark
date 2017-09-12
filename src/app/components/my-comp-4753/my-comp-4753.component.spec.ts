import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4753Component } from './my-comp-4753.component';

describe('MyComp4753Component', () => {
  let component: MyComp4753Component;
  let fixture: ComponentFixture<MyComp4753Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4753Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4753Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
