import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9916Component } from './my-comp-9916.component';

describe('MyComp9916Component', () => {
  let component: MyComp9916Component;
  let fixture: ComponentFixture<MyComp9916Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9916Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9916Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
