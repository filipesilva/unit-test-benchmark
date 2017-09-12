import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5961Component } from './my-comp-5961.component';

describe('MyComp5961Component', () => {
  let component: MyComp5961Component;
  let fixture: ComponentFixture<MyComp5961Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5961Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5961Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
