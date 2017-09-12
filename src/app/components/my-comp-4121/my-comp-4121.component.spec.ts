import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4121Component } from './my-comp-4121.component';

describe('MyComp4121Component', () => {
  let component: MyComp4121Component;
  let fixture: ComponentFixture<MyComp4121Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4121Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4121Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
