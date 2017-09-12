import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4341Component } from './my-comp-4341.component';

describe('MyComp4341Component', () => {
  let component: MyComp4341Component;
  let fixture: ComponentFixture<MyComp4341Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4341Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4341Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
