import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2336Component } from './my-comp-2336.component';

describe('MyComp2336Component', () => {
  let component: MyComp2336Component;
  let fixture: ComponentFixture<MyComp2336Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2336Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2336Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
