import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5582Component } from './my-comp-5582.component';

describe('MyComp5582Component', () => {
  let component: MyComp5582Component;
  let fixture: ComponentFixture<MyComp5582Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5582Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5582Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
