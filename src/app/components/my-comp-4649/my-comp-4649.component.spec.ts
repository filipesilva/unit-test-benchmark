import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4649Component } from './my-comp-4649.component';

describe('MyComp4649Component', () => {
  let component: MyComp4649Component;
  let fixture: ComponentFixture<MyComp4649Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4649Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4649Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
