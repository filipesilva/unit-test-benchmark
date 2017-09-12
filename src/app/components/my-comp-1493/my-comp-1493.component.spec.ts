import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1493Component } from './my-comp-1493.component';

describe('MyComp1493Component', () => {
  let component: MyComp1493Component;
  let fixture: ComponentFixture<MyComp1493Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1493Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1493Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
