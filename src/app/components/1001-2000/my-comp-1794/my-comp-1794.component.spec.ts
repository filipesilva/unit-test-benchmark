import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1794Component } from './my-comp-1794.component';

describe('MyComp1794Component', () => {
  let component: MyComp1794Component;
  let fixture: ComponentFixture<MyComp1794Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1794Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1794Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
