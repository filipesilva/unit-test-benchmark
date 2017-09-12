import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5039Component } from './my-comp-5039.component';

describe('MyComp5039Component', () => {
  let component: MyComp5039Component;
  let fixture: ComponentFixture<MyComp5039Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5039Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5039Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
