import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5216Component } from './my-comp-5216.component';

describe('MyComp5216Component', () => {
  let component: MyComp5216Component;
  let fixture: ComponentFixture<MyComp5216Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5216Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5216Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
