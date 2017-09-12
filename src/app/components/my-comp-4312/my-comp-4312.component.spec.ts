import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4312Component } from './my-comp-4312.component';

describe('MyComp4312Component', () => {
  let component: MyComp4312Component;
  let fixture: ComponentFixture<MyComp4312Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4312Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4312Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
