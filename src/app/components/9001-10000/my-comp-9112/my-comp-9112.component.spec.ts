import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9112Component } from './my-comp-9112.component';

describe('MyComp9112Component', () => {
  let component: MyComp9112Component;
  let fixture: ComponentFixture<MyComp9112Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9112Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9112Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
