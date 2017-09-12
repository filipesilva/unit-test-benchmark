import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1890Component } from './my-comp-1890.component';

describe('MyComp1890Component', () => {
  let component: MyComp1890Component;
  let fixture: ComponentFixture<MyComp1890Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1890Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1890Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
