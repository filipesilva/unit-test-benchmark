import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7905Component } from './my-comp-7905.component';

describe('MyComp7905Component', () => {
  let component: MyComp7905Component;
  let fixture: ComponentFixture<MyComp7905Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7905Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7905Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
