import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp236Component } from './my-comp-236.component';

describe('MyComp236Component', () => {
  let component: MyComp236Component;
  let fixture: ComponentFixture<MyComp236Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp236Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp236Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
