import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5339Component } from './my-comp-5339.component';

describe('MyComp5339Component', () => {
  let component: MyComp5339Component;
  let fixture: ComponentFixture<MyComp5339Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5339Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5339Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
