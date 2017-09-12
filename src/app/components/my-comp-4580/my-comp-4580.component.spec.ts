import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4580Component } from './my-comp-4580.component';

describe('MyComp4580Component', () => {
  let component: MyComp4580Component;
  let fixture: ComponentFixture<MyComp4580Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4580Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4580Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
