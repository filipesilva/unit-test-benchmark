import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1935Component } from './my-comp-1935.component';

describe('MyComp1935Component', () => {
  let component: MyComp1935Component;
  let fixture: ComponentFixture<MyComp1935Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1935Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1935Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
