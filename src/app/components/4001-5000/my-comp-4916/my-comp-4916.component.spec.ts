import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4916Component } from './my-comp-4916.component';

describe('MyComp4916Component', () => {
  let component: MyComp4916Component;
  let fixture: ComponentFixture<MyComp4916Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4916Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4916Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
