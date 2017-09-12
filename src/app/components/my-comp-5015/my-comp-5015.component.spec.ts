import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5015Component } from './my-comp-5015.component';

describe('MyComp5015Component', () => {
  let component: MyComp5015Component;
  let fixture: ComponentFixture<MyComp5015Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5015Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5015Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
