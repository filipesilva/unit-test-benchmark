import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8125Component } from './my-comp-8125.component';

describe('MyComp8125Component', () => {
  let component: MyComp8125Component;
  let fixture: ComponentFixture<MyComp8125Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8125Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8125Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
