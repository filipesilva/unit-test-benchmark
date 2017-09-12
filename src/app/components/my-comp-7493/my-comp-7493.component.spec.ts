import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7493Component } from './my-comp-7493.component';

describe('MyComp7493Component', () => {
  let component: MyComp7493Component;
  let fixture: ComponentFixture<MyComp7493Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7493Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7493Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
