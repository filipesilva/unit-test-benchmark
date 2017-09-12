import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2252Component } from './my-comp-2252.component';

describe('MyComp2252Component', () => {
  let component: MyComp2252Component;
  let fixture: ComponentFixture<MyComp2252Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2252Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2252Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
