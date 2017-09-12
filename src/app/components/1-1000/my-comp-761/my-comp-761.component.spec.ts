import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp761Component } from './my-comp-761.component';

describe('MyComp761Component', () => {
  let component: MyComp761Component;
  let fixture: ComponentFixture<MyComp761Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp761Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp761Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
