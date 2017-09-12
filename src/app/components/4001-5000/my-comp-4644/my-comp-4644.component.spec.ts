import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4644Component } from './my-comp-4644.component';

describe('MyComp4644Component', () => {
  let component: MyComp4644Component;
  let fixture: ComponentFixture<MyComp4644Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4644Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4644Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
