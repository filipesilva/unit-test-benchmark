import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5083Component } from './my-comp-5083.component';

describe('MyComp5083Component', () => {
  let component: MyComp5083Component;
  let fixture: ComponentFixture<MyComp5083Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5083Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5083Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
