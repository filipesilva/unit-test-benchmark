import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5882Component } from './my-comp-5882.component';

describe('MyComp5882Component', () => {
  let component: MyComp5882Component;
  let fixture: ComponentFixture<MyComp5882Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5882Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5882Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
