import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7512Component } from './my-comp-7512.component';

describe('MyComp7512Component', () => {
  let component: MyComp7512Component;
  let fixture: ComponentFixture<MyComp7512Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7512Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7512Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
