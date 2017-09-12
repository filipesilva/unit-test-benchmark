import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7404Component } from './my-comp-7404.component';

describe('MyComp7404Component', () => {
  let component: MyComp7404Component;
  let fixture: ComponentFixture<MyComp7404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
