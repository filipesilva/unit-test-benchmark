import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1358Component } from './my-comp-1358.component';

describe('MyComp1358Component', () => {
  let component: MyComp1358Component;
  let fixture: ComponentFixture<MyComp1358Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1358Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1358Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
