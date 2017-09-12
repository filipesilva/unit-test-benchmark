import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5916Component } from './my-comp-5916.component';

describe('MyComp5916Component', () => {
  let component: MyComp5916Component;
  let fixture: ComponentFixture<MyComp5916Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5916Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5916Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
