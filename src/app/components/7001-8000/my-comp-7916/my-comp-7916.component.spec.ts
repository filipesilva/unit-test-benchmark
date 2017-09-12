import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7916Component } from './my-comp-7916.component';

describe('MyComp7916Component', () => {
  let component: MyComp7916Component;
  let fixture: ComponentFixture<MyComp7916Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7916Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7916Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
