import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1942Component } from './my-comp-1942.component';

describe('MyComp1942Component', () => {
  let component: MyComp1942Component;
  let fixture: ComponentFixture<MyComp1942Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1942Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1942Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
