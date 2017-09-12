import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6512Component } from './my-comp-6512.component';

describe('MyComp6512Component', () => {
  let component: MyComp6512Component;
  let fixture: ComponentFixture<MyComp6512Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6512Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6512Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
