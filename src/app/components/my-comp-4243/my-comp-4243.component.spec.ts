import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4243Component } from './my-comp-4243.component';

describe('MyComp4243Component', () => {
  let component: MyComp4243Component;
  let fixture: ComponentFixture<MyComp4243Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4243Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4243Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
