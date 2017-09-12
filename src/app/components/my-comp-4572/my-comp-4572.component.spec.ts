import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4572Component } from './my-comp-4572.component';

describe('MyComp4572Component', () => {
  let component: MyComp4572Component;
  let fixture: ComponentFixture<MyComp4572Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4572Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4572Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
