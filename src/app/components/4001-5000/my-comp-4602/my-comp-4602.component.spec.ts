import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4602Component } from './my-comp-4602.component';

describe('MyComp4602Component', () => {
  let component: MyComp4602Component;
  let fixture: ComponentFixture<MyComp4602Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4602Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4602Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
