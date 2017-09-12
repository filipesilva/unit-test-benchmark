import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4761Component } from './my-comp-4761.component';

describe('MyComp4761Component', () => {
  let component: MyComp4761Component;
  let fixture: ComponentFixture<MyComp4761Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4761Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4761Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
