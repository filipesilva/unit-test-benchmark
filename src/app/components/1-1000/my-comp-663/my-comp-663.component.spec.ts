import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp663Component } from './my-comp-663.component';

describe('MyComp663Component', () => {
  let component: MyComp663Component;
  let fixture: ComponentFixture<MyComp663Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp663Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp663Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
