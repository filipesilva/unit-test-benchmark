import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7642Component } from './my-comp-7642.component';

describe('MyComp7642Component', () => {
  let component: MyComp7642Component;
  let fixture: ComponentFixture<MyComp7642Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7642Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7642Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
