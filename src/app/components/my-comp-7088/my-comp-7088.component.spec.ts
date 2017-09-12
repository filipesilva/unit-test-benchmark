import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7088Component } from './my-comp-7088.component';

describe('MyComp7088Component', () => {
  let component: MyComp7088Component;
  let fixture: ComponentFixture<MyComp7088Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7088Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7088Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
