import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4973Component } from './my-comp-4973.component';

describe('MyComp4973Component', () => {
  let component: MyComp4973Component;
  let fixture: ComponentFixture<MyComp4973Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4973Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4973Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
