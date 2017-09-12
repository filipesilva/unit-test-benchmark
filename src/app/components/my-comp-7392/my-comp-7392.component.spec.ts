import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7392Component } from './my-comp-7392.component';

describe('MyComp7392Component', () => {
  let component: MyComp7392Component;
  let fixture: ComponentFixture<MyComp7392Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7392Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7392Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
