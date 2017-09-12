import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4339Component } from './my-comp-4339.component';

describe('MyComp4339Component', () => {
  let component: MyComp4339Component;
  let fixture: ComponentFixture<MyComp4339Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4339Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4339Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
