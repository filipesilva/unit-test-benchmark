import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4541Component } from './my-comp-4541.component';

describe('MyComp4541Component', () => {
  let component: MyComp4541Component;
  let fixture: ComponentFixture<MyComp4541Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4541Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4541Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
