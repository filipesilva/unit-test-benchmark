import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1748Component } from './my-comp-1748.component';

describe('MyComp1748Component', () => {
  let component: MyComp1748Component;
  let fixture: ComponentFixture<MyComp1748Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1748Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1748Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
