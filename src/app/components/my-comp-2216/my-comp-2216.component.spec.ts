import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2216Component } from './my-comp-2216.component';

describe('MyComp2216Component', () => {
  let component: MyComp2216Component;
  let fixture: ComponentFixture<MyComp2216Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2216Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2216Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
