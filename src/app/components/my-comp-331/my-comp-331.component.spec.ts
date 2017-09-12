import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp331Component } from './my-comp-331.component';

describe('MyComp331Component', () => {
  let component: MyComp331Component;
  let fixture: ComponentFixture<MyComp331Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp331Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp331Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
