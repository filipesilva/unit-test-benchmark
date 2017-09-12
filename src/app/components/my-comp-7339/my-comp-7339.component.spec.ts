import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7339Component } from './my-comp-7339.component';

describe('MyComp7339Component', () => {
  let component: MyComp7339Component;
  let fixture: ComponentFixture<MyComp7339Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7339Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7339Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
