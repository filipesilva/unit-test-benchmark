import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4141Component } from './my-comp-4141.component';

describe('MyComp4141Component', () => {
  let component: MyComp4141Component;
  let fixture: ComponentFixture<MyComp4141Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4141Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4141Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
