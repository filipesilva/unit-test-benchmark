import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4691Component } from './my-comp-4691.component';

describe('MyComp4691Component', () => {
  let component: MyComp4691Component;
  let fixture: ComponentFixture<MyComp4691Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4691Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4691Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
