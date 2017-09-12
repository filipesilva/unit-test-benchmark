import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4191Component } from './my-comp-4191.component';

describe('MyComp4191Component', () => {
  let component: MyComp4191Component;
  let fixture: ComponentFixture<MyComp4191Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4191Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4191Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
