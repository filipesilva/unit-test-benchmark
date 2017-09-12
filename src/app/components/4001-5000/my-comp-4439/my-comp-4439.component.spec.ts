import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4439Component } from './my-comp-4439.component';

describe('MyComp4439Component', () => {
  let component: MyComp4439Component;
  let fixture: ComponentFixture<MyComp4439Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4439Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4439Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
