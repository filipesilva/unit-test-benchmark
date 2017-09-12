import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6794Component } from './my-comp-6794.component';

describe('MyComp6794Component', () => {
  let component: MyComp6794Component;
  let fixture: ComponentFixture<MyComp6794Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6794Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6794Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
