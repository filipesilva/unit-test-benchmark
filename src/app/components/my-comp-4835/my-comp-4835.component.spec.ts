import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4835Component } from './my-comp-4835.component';

describe('MyComp4835Component', () => {
  let component: MyComp4835Component;
  let fixture: ComponentFixture<MyComp4835Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4835Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4835Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
