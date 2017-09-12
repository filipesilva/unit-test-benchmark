import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5254Component } from './my-comp-5254.component';

describe('MyComp5254Component', () => {
  let component: MyComp5254Component;
  let fixture: ComponentFixture<MyComp5254Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5254Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5254Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
