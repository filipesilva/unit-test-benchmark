import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4374Component } from './my-comp-4374.component';

describe('MyComp4374Component', () => {
  let component: MyComp4374Component;
  let fixture: ComponentFixture<MyComp4374Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4374Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4374Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
