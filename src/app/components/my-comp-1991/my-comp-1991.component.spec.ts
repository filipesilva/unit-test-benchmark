import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1991Component } from './my-comp-1991.component';

describe('MyComp1991Component', () => {
  let component: MyComp1991Component;
  let fixture: ComponentFixture<MyComp1991Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1991Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1991Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
