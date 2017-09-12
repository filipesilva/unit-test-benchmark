import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4616Component } from './my-comp-4616.component';

describe('MyComp4616Component', () => {
  let component: MyComp4616Component;
  let fixture: ComponentFixture<MyComp4616Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4616Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4616Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
