import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7794Component } from './my-comp-7794.component';

describe('MyComp7794Component', () => {
  let component: MyComp7794Component;
  let fixture: ComponentFixture<MyComp7794Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7794Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7794Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
