import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7551Component } from './my-comp-7551.component';

describe('MyComp7551Component', () => {
  let component: MyComp7551Component;
  let fixture: ComponentFixture<MyComp7551Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7551Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7551Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
