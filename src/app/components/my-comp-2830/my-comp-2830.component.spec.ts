import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2830Component } from './my-comp-2830.component';

describe('MyComp2830Component', () => {
  let component: MyComp2830Component;
  let fixture: ComponentFixture<MyComp2830Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2830Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2830Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
