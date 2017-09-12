import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4512Component } from './my-comp-4512.component';

describe('MyComp4512Component', () => {
  let component: MyComp4512Component;
  let fixture: ComponentFixture<MyComp4512Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4512Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4512Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
