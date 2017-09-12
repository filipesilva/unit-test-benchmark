import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7034Component } from './my-comp-7034.component';

describe('MyComp7034Component', () => {
  let component: MyComp7034Component;
  let fixture: ComponentFixture<MyComp7034Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7034Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7034Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
