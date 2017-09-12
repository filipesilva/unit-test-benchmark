import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9580Component } from './my-comp-9580.component';

describe('MyComp9580Component', () => {
  let component: MyComp9580Component;
  let fixture: ComponentFixture<MyComp9580Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9580Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9580Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
