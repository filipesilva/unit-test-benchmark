import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp842Component } from './my-comp-842.component';

describe('MyComp842Component', () => {
  let component: MyComp842Component;
  let fixture: ComponentFixture<MyComp842Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp842Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp842Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
