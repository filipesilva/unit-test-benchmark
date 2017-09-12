import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1916Component } from './my-comp-1916.component';

describe('MyComp1916Component', () => {
  let component: MyComp1916Component;
  let fixture: ComponentFixture<MyComp1916Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1916Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1916Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
