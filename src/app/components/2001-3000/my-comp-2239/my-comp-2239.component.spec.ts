import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2239Component } from './my-comp-2239.component';

describe('MyComp2239Component', () => {
  let component: MyComp2239Component;
  let fixture: ComponentFixture<MyComp2239Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2239Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2239Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
