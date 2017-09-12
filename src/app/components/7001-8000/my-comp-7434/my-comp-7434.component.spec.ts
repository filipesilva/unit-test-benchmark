import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7434Component } from './my-comp-7434.component';

describe('MyComp7434Component', () => {
  let component: MyComp7434Component;
  let fixture: ComponentFixture<MyComp7434Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7434Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7434Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
