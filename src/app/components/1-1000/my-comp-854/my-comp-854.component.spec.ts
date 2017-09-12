import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp854Component } from './my-comp-854.component';

describe('MyComp854Component', () => {
  let component: MyComp854Component;
  let fixture: ComponentFixture<MyComp854Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp854Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp854Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
