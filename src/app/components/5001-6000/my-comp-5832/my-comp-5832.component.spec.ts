import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5832Component } from './my-comp-5832.component';

describe('MyComp5832Component', () => {
  let component: MyComp5832Component;
  let fixture: ComponentFixture<MyComp5832Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5832Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5832Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
