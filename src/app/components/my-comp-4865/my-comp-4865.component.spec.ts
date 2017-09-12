import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4865Component } from './my-comp-4865.component';

describe('MyComp4865Component', () => {
  let component: MyComp4865Component;
  let fixture: ComponentFixture<MyComp4865Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4865Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4865Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
