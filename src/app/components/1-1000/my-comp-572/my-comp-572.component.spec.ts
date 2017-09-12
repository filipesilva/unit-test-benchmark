import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp572Component } from './my-comp-572.component';

describe('MyComp572Component', () => {
  let component: MyComp572Component;
  let fixture: ComponentFixture<MyComp572Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp572Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp572Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
