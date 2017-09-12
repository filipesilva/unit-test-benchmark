import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4077Component } from './my-comp-4077.component';

describe('MyComp4077Component', () => {
  let component: MyComp4077Component;
  let fixture: ComponentFixture<MyComp4077Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4077Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4077Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
