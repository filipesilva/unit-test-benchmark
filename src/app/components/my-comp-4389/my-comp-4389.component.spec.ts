import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4389Component } from './my-comp-4389.component';

describe('MyComp4389Component', () => {
  let component: MyComp4389Component;
  let fixture: ComponentFixture<MyComp4389Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4389Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4389Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
