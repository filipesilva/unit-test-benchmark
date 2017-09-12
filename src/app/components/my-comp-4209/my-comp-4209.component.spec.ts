import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4209Component } from './my-comp-4209.component';

describe('MyComp4209Component', () => {
  let component: MyComp4209Component;
  let fixture: ComponentFixture<MyComp4209Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4209Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4209Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
