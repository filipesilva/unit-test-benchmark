import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5609Component } from './my-comp-5609.component';

describe('MyComp5609Component', () => {
  let component: MyComp5609Component;
  let fixture: ComponentFixture<MyComp5609Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5609Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5609Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
