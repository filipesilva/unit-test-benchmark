import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4066Component } from './my-comp-4066.component';

describe('MyComp4066Component', () => {
  let component: MyComp4066Component;
  let fixture: ComponentFixture<MyComp4066Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4066Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4066Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
