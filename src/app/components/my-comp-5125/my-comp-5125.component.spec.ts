import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5125Component } from './my-comp-5125.component';

describe('MyComp5125Component', () => {
  let component: MyComp5125Component;
  let fixture: ComponentFixture<MyComp5125Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5125Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5125Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
