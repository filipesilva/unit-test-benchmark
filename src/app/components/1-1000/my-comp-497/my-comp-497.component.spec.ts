import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp497Component } from './my-comp-497.component';

describe('MyComp497Component', () => {
  let component: MyComp497Component;
  let fixture: ComponentFixture<MyComp497Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp497Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp497Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
