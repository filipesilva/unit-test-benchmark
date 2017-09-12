import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7504Component } from './my-comp-7504.component';

describe('MyComp7504Component', () => {
  let component: MyComp7504Component;
  let fixture: ComponentFixture<MyComp7504Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7504Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7504Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
