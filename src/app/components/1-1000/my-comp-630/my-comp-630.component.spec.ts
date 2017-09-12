import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp630Component } from './my-comp-630.component';

describe('MyComp630Component', () => {
  let component: MyComp630Component;
  let fixture: ComponentFixture<MyComp630Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp630Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp630Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
