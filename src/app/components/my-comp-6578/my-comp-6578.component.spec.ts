import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6578Component } from './my-comp-6578.component';

describe('MyComp6578Component', () => {
  let component: MyComp6578Component;
  let fixture: ComponentFixture<MyComp6578Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6578Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6578Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
