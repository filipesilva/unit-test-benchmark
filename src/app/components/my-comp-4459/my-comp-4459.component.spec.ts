import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4459Component } from './my-comp-4459.component';

describe('MyComp4459Component', () => {
  let component: MyComp4459Component;
  let fixture: ComponentFixture<MyComp4459Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4459Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4459Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
