import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4458Component } from './my-comp-4458.component';

describe('MyComp4458Component', () => {
  let component: MyComp4458Component;
  let fixture: ComponentFixture<MyComp4458Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4458Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4458Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
