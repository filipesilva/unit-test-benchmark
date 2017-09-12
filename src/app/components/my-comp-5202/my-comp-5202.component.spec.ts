import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5202Component } from './my-comp-5202.component';

describe('MyComp5202Component', () => {
  let component: MyComp5202Component;
  let fixture: ComponentFixture<MyComp5202Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5202Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5202Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
