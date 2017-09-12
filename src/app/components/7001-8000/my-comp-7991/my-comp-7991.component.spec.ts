import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7991Component } from './my-comp-7991.component';

describe('MyComp7991Component', () => {
  let component: MyComp7991Component;
  let fixture: ComponentFixture<MyComp7991Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7991Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7991Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
