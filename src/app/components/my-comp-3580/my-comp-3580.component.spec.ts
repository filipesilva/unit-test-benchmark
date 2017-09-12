import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3580Component } from './my-comp-3580.component';

describe('MyComp3580Component', () => {
  let component: MyComp3580Component;
  let fixture: ComponentFixture<MyComp3580Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3580Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3580Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
