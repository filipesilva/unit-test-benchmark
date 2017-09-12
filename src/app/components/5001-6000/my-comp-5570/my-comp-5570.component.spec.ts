import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5570Component } from './my-comp-5570.component';

describe('MyComp5570Component', () => {
  let component: MyComp5570Component;
  let fixture: ComponentFixture<MyComp5570Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5570Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5570Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
