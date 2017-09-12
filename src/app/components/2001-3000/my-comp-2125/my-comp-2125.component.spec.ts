import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2125Component } from './my-comp-2125.component';

describe('MyComp2125Component', () => {
  let component: MyComp2125Component;
  let fixture: ComponentFixture<MyComp2125Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2125Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2125Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
