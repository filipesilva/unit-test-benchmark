import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6991Component } from './my-comp-6991.component';

describe('MyComp6991Component', () => {
  let component: MyComp6991Component;
  let fixture: ComponentFixture<MyComp6991Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6991Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6991Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
