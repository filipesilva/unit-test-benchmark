import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp642Component } from './my-comp-642.component';

describe('MyComp642Component', () => {
  let component: MyComp642Component;
  let fixture: ComponentFixture<MyComp642Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp642Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp642Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
