import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4597Component } from './my-comp-4597.component';

describe('MyComp4597Component', () => {
  let component: MyComp4597Component;
  let fixture: ComponentFixture<MyComp4597Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4597Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4597Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
