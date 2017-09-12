import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp916Component } from './my-comp-916.component';

describe('MyComp916Component', () => {
  let component: MyComp916Component;
  let fixture: ComponentFixture<MyComp916Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp916Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp916Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
