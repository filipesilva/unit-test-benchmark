import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp102Component } from './my-comp-102.component';

describe('MyComp102Component', () => {
  let component: MyComp102Component;
  let fixture: ComponentFixture<MyComp102Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp102Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp102Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
