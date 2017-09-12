import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp512Component } from './my-comp-512.component';

describe('MyComp512Component', () => {
  let component: MyComp512Component;
  let fixture: ComponentFixture<MyComp512Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp512Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp512Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
